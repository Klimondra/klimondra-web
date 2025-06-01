"use client";

import Select from "react-select";
import { useEffect, useState } from "react";
import DynamicIcon from "@/components/utils/DynamicIcon";

const ProjektySelect = ({ filter, setFilter, techstackData }) => {
    const options = techstackData.map((tech) => ({
        label: tech.label,
        value: tech.id,
        icon: {
            lib: tech.icon_lib,
            name: tech.icon_component,
            color: tech.color,
        }
    }));

    const customStyles = {
        control: (base, state) => ({
            ...base,
            background: "linear-gradient(180deg, var(--color-bgDark-600) 0%, var(--color-bgDark-600) 90%)",
            borderColor: "var(--color-bgDark-500)",
            borderWidth: "2px",
            borderRadius: "0.375rem", // rounded-md
            boxShadow: "none",
            transition: "all 0.2s ease",
            fontFamily: '"Readex Pro", sans-serif',
            color: "white", // text-white
            outline: "none", // outline-none
            minHeight: "42px",
            padding: "2px", // p-2
            width: "100%", // w-full
            "&:hover": {
                borderColor: "var(--color-bgDark-500)",
            },
        }),
        valueContainer: (base) => ({
            ...base,
            padding: "2px 8px",
        }),
        singleValue: (base) => ({
            ...base,
            color: "white", // text-white
            fontSize: "1.125rem", // text-lg
            fontFamily: '"Readex Pro", sans-serif',
        }),
        input: (base) => ({
            ...base,
            color: "white", // text-white
            fontSize: "1.125rem", // text-lg
            fontFamily: '"Readex Pro", sans-serif',
        }),
        placeholder: (base) => ({
            ...base,
            color: "#aaa",
            fontSize: "1.125rem", // text-lg
            fontFamily: '"Readex Pro", sans-serif',
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: "var(--color-bgDark-800)",
            borderRadius: "0.375rem", // rounded-md
            overflow: "hidden",
            zIndex: 9999,
            fontFamily: '"Readex Pro", sans-serif',
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        }),
        menuList: (base) => ({
            ...base,
            padding: "4px",
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected
                ? "var(--color-bgDark-500)"
                : state.isFocused
                    ? "var(--color-bgDark-600)"
                    : "var(--color-bgDark-700)",
            color: "white",
            padding: "8px 12px",
            cursor: "pointer",
            fontFamily: '"Readex Pro", sans-serif',
            fontSize: "1.125rem", // text-lg
            transition: "background-color 0.15s ease",
            "&:hover": {
                backgroundColor: state.isSelected ? "var(--color-bgDark-500)" : "var(--color-bgDark-600)",
            },
        }),
        multiValue: (base) => ({
            ...base,
            backgroundColor: "var(--color-bgDark-500)",
            borderRadius: "0.25rem",
        }),
        multiValueLabel: (base) => ({
            ...base,
            color: "white",
            fontFamily: '"Readex Pro", sans-serif',
            padding: "2px 6px",
        }),
        multiValueRemove: (base) => ({
            ...base,
            color: "white",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "var(--color-bgDark-400)",
                color: "white",
            },
        }),
        indicatorSeparator: (base) => ({
            ...base,
            backgroundColor: "var(--color-bgDark-500)",
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: "#aaa",
            "&:hover": {
                color: "white",
            },
        }),
        clearIndicator: (base) => ({
            ...base,
            color: "#aaa",
            "&:hover": {
                color: "white",
            },
        }),
        menuPortal: (base) => ({
            ...base,
            zIndex: 9999,
        }),
    };

    // Zajistí, že portál funguje i při SSR
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        mounted && (
            <Select
                id="techstackInput"
                options={options}
                styles={customStyles}
                placeholder="Všechny technologie"
                isClearable
                isMulti
                value={
                    filter.tech.length > 0
                        ? filter.tech.map(tech => options.find(opt => opt.value === tech))
                        : null
                }
                onChange={(selected) =>
                    setFilter({
                        ...filter,
                        tech: selected ? selected.map(option => option.value) : [],
                    })
                }
                menuPortalTarget={typeof window !== "undefined" ? document.body : null}
                getOptionLabel={(e) => (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <DynamicIcon lib={e.icon.lib} name={e.icon.name} style={{ color: e.icon.color, fontSize: 20, marginRight: 8 }} />
                        {e.label}
                    </div>
                )}
            />
        )
    );
};

export default ProjektySelect;
