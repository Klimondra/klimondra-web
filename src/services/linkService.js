const getLinks = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/db/linktree-links", {
            cache: "no-cache",
        })

        if (!res.ok) {
            throw new Error("Failed to fetch links from server")
        }

        const data = await res.json();
        return data.links || []
    } catch (e) {
        console.log("GetLinks method error: " + e)
        return []
    }
}

const deleteLink = async (id) => {
    await fetch(`http://localhost:3000/api/db/linktree-links/?id=${id}`, {
        method: "DELETE",
    })
}

const createLink = async (dataToUpload) => {
    try {
        const res = await fetch(`http://localhost:3000/api/db/linktree-links/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToUpload)
        })
    }
    catch (error) {
        console.log("CreateLink error: " + error)
    }
}

export { getLinks, deleteLink, createLink }