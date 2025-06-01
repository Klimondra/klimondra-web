import {updateDbDataById, getDbDataList} from "@/db/db-actions";

export const reorderItems = async (from, to, id, collectionName, collectionData) => {
    // Validace vstupních hodnot
    if (from === null || from === undefined || to === null || to === undefined) {
        console.error("Invalid order values:", { from, to });
        return;
    }

    // Převod na čísla pro jistotu
    const fromOrder = parseInt(from);
    const toOrder = parseInt(to);

    if (isNaN(fromOrder) || isNaN(toOrder)) {
        console.error("Order values are not valid numbers:", { from, to });
        return;
    }

    let updatedItems = [...collectionData];

    // Pokud se hodnota snižuje (např. z 5 na 2)
    if (fromOrder > toOrder) {
        updatedItems = updatedItems.map(item => {
            if (item.id !== id && item.order >= toOrder && item.order < fromOrder) {
                return {...item, order: item.order + 1};
            }
            return item;
        });
    }

    // Pokud se hodnota zvyšuje (např. z 2 na 5)
    else if (fromOrder < toOrder) {
        updatedItems = updatedItems.map(item => {
            if (item.id !== id && item.order <= toOrder && item.order > fromOrder) {
                return {...item, order: item.order - 1};
            }
            return item;
        });
    }

    // Odeslat všechny změněné prvky zpět do Supabase
    const updates = updatedItems.filter(i => {
        const originalItem = collectionData.find(d => d.id === i.id);
        return i.id !== id && originalItem && i.order !== originalItem.order;
    });

    // Aktualizovat s kontrolou hodnot
    for (const item of updates) {
        if (item.order !== null && item.order !== undefined && !isNaN(item.order)) {
            await updateDbDataById(collectionName, item.id, {order: item.order});
        }
    }

    // Nakonec aktualizovat cílový prvek
    if (!isNaN(toOrder)) {
        await updateDbDataById(collectionName, id, {order: toOrder});
    }
};

export const reorderAfterDelete = async (collectionName, collectionData) => {
    try {
        // Nejdříve získejte aktuální data z databáze pro jistotu
        const currentData = await getDbDataList(collectionName, false);

        if (!currentData || currentData.length === 0) {
            console.log("No data to reorder");
            return;
        }

        // Seřadit podle aktuálního pořadí (s ošetřením null hodnot)
        const sorted = currentData
            .filter(item => item.order !== null && item.order !== undefined && !isNaN(item.order))
            .sort((a, b) => a.order - b.order);

        // Přepočítat pořadí jako 0, 1, 2...
        const updates = [];
        sorted.forEach((item, index) => {
            if (item.order !== index) {
                updates.push({
                    id: item.id,
                    newOrder: index
                });
            }
        });

        // Aktualizovat databázi
        for (const update of updates) {
            if (update.newOrder !== null && update.newOrder !== undefined && !isNaN(update.newOrder)) {
                await updateDbDataById(collectionName, update.id, { order: update.newOrder });
            }
        }

        console.log(`Reordered ${updates.length} items after deletion`);

    } catch (error) {
        console.error("Error in reorderAfterDelete:", error);
    }
};

// Pomocná funkce pro kompletní přeřazení všech prvků
export const resetOrderSequence = async (collectionName) => {
    try {
        const data = await getDbDataList(collectionName, false);

        if (!data || data.length === 0) {
            return;
        }

        // Seřadit podle aktuálního order, pak podle id pro konzistenci
        const sorted = data.sort((a, b) => {
            const orderA = a.order ?? 999999;
            const orderB = b.order ?? 999999;
            if (orderA === orderB) {
                return a.id - b.id;
            }
            return orderA - orderB;
        });

        // Přiřadit nové pořadí 0, 1, 2, ...
        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i].order !== i) {
                await updateDbDataById(collectionName, sorted[i].id, { order: i });
            }
        }

        console.log(`Reset order sequence for ${sorted.length} items`);

    } catch (error) {
        console.error("Error in resetOrderSequence:", error);
    }
};

// Pomocná funkce pro validaci pořadí
export const validateOrderSequence = async (collectionName) => {
    try {
        const data = await getDbDataList(collectionName, false);

        if (!data || data.length === 0) {
            return { valid: true, issues: [] };
        }

        const issues = [];
        const orders = data.map(item => item.order).filter(order => order !== null && order !== undefined);
        const sortedOrders = [...orders].sort((a, b) => a - b);

        // Kontrola duplicitních hodnot
        const duplicates = orders.filter((order, index) => orders.indexOf(order) !== index);
        if (duplicates.length > 0) {
            issues.push(`Duplicate order values: ${[...new Set(duplicates)].join(', ')}`);
        }

        // Kontrola chybějících hodnot v sekvenci
        for (let i = 0; i < data.length; i++) {
            if (!sortedOrders.includes(i)) {
                issues.push(`Missing order value: ${i}`);
            }
        }

        // Kontrola null/undefined hodnot
        const nullOrders = data.filter(item => item.order === null || item.order === undefined);
        if (nullOrders.length > 0) {
            issues.push(`${nullOrders.length} items with null/undefined order`);
        }

        return {
            valid: issues.length === 0,
            issues: issues,
            totalItems: data.length,
            validOrders: orders.length
        };

    } catch (error) {
        console.error("Error in validateOrderSequence:", error);
        return { valid: false, issues: [`Error: ${error.message}`] };
    }
};