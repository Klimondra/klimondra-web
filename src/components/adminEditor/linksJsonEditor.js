"use client";
import React, {useState} from 'react';

const LinksJsonEditor = ({ id, value = [], onChange }) => {
    const [links, setLinks] = useState(Array.isArray(value) ? value : []);

    const handleAdd = () => {
        const updated = [...links, { label: "", link: "" }];
        setLinks(updated);
        onChange({ target: { value: updated } });
    };

    const handleChange = (index, field, newValue) => {
        const updated = links.map((link, i) =>
            i === index ? { ...link, [field]: newValue } : link
        );
        setLinks(updated);
        onChange({ target: { value: updated } });
    };

    const handleDelete = (index) => {
        const updated = links.filter((_, i) => i !== index);
        setLinks(updated);
        onChange({ target: { value: updated } });
    };

    return (
        <div id={id} className="flex flex-col gap-2">
            {links.map((link, index) => (
                <div key={index} className="flex gap-2 items-center">
                    <input
                        className={`w-full h-10 px-2.5 py-1.5 rounded-lg border-1 bg-white/70 border-neutral-200 shadow-md outline-0`}
                        placeholder="Název"
                        value={link.label}
                        onChange={(e) => handleChange(index, "label", e.target.value)}
                    />
                    <input
                        className={`w-full h-10 px-2.5 py-1.5 rounded-lg border-1 bg-white/70 border-neutral-200 shadow-md outline-0`}
                        placeholder="Odkaz"
                        value={link.link}
                        onChange={(e) => handleChange(index, "link", e.target.value)}
                    />
                    <button  onClick={() => handleDelete(index)} type="button">
                        ✕
                    </button>
                </div>
            ))}
            <button onClick={handleAdd} type={"button"}>
                + Přidat odkaz
            </button>
        </div>
    );
};

export default LinksJsonEditor;