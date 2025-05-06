const getLinks = async () => {
    try {
        const baseUrl = "https://klimondra.imbus.org";
        const url = `${baseUrl}/api/db/linktree-links`;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Failed to fetch links from server: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return data.links || [];
    } catch (e) {
        console.error("GetLinks method error:", e);
        return [];
    }
};
const deleteLink = async (id) => {
    try {
        const res = await fetch(`https://klimondra.imbus.org/api/db/linktree-links/?id=${id}`, {
            method: "DELETE",
        });

        if (!res.ok) {
            throw new Error("Failed to delete link");
        }

        return await res.json();
    } catch (error) {
        console.log("DeleteLink error: " + error);
    }
};

const createLink = async (dataToUpload) => {
    try {
        const res = await fetch(`https://klimondra.imbus.org/api/db/linktree-links/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToUpload)
        });

        if (!res.ok) {
            throw new Error("Failed to create link");
        }

        return await res.json();
    } catch (error) {
        console.log("CreateLink error: " + error);
    }
};

const getLinkById = async (id) => {
    try {
        const res = await fetch(`https://klimondra.imbus.org/api/db/linktree-links/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch one link from server");
        }

        return res.json();
    } catch (e) {
        console.log("GetLinkById error: " + e);
    }
};

const editLink = async (id, data) => {
    try {
        const res = await fetch(`https://klimondra.imbus.org/api/db/linktree-links/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                newLabel: data.label,
                newLink: data.link,
                newIcon: data.icon
            }),
        });

        if (!res.ok) {
            throw new Error("Failed to update link from server");
        }

        return await res.json();
    } catch (e) {
        console.log("UpdateLink error: " + e);
    }
};

export { getLinks, deleteLink, createLink, getLinkById, editLink };