const getTechs = async () => {
    try {
        const baseUrl = "https://klimondra.imbus.org";
        const url = `${baseUrl}/api/db/techstack`;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Failed to fetch techs from server: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return data.techStack || [];
    } catch (e) {
        console.error("GetTechs method error:", e);
        return [];
    }
};
const deleteTech = async (id) => {
    try {
        const res = await fetch(`https://klimondra.imbus.org/api/db/techstack/?id=${id}`, {
            method: "DELETE",
        });

        if (!res.ok) {
            throw new Error("Failed to delete technology");
        }

        return await res.json();
    } catch (error) {
        console.log("DeleteTech error: " + error);
    }
};

const createTech = async (dataToUpload) => {
    try {
        const res = await fetch(`https://klimondra.imbus.org/api/db/techstack/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToUpload)
        });

        if (!res.ok) {
            throw new Error("Failed to create technology");
        }

        return await res.json();
    } catch (error) {
        console.log("CreateTech error: " + error);
    }
};

const getTechById = async (id) => {
    try {
        const res = await fetch(`https://klimondra.imbus.org/api/db/techstack/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch one technology from server");
        }

        return res.json();
    } catch (e) {
        console.log("GetTechById error: " + e);
    }
};

const editTech = async (id, data) => {
    try {
        const res = await fetch(`https://klimondra.imbus.org/api/db/techstack/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                newLabel: data.label,
                newColor: data.color,
                newIcon: data.icon
            }),
        });

        if (!res.ok) {
            throw new Error("Failed to update tech from server");
        }

        return await res.json();
    } catch (e) {
        console.log("UpdateTech error: " + e);
    }
};

export { getTechs, deleteTech, createTech, getTechById, editTech };