"use client"
// components/global/DynamicIcon.js
import { useEffect, useState } from "react";
import iconLibraries from "@/contentData/iconLibraries";

export default function DynamicIcon({ lib, name, className }) {
    const [IconComponent, setIconComponent] = useState(null);

    useEffect(() => {
        if (!lib || !name) return;

        const iconLib = iconLibraries[lib.toLowerCase()];
        if (iconLib && iconLib[name]) {
            setIconComponent(() => iconLib[name]);
        } else {
            console.warn(`Ikona ${name} v knihovně ${lib} nenalezena.`);
        }
    }, [lib, name]);

    return IconComponent ? <IconComponent className={className} /> : null;
}
