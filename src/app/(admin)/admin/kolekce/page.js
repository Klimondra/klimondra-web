import React from 'react';
import {collections} from "@/db/collections";
import DynamicIcon from "@/components/utils/DynamicIcon";
import Link from "next/link";
import {TbArrowUpRight} from "react-icons/tb";

const CollectionSettings = () => {

    return (
        <>
            <h1 className={`font-readex text-black font-bold text-4xl`}>Kolekce</h1>
            <section className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mt-6 gap-4`}>
                {collections.map((collection, index) => (
                    <Link key={index} href={`/admin/kolekce/${collection.name}`}
                        className={`h-64 flex flex-col justify-between bg-gradient-to-br from-primaryBlue-50/10 to-primaryBlue-50/20 p-4 rounded-lg border-1 border-neutral-200 shadow-md
                                    hover:shadow-lg hover:-translate-y-2 active:scale-99 transition-all duration-200`}
                    >
                        <div className={`flex flex-col gap-2`}>
                            <DynamicIcon className={`text-3xl text-black`} lib={collection.icon.lib} name={collection.icon.component}/>
                            <h2 className={`text-black text-3xl font-readex font-semibold`}>{collection.visible_name}</h2>
                        </div>
                        <div className={`w-full flex flex-row justify-end gap-2`}>
                            <TbArrowUpRight className={`text-2xl text-neutral-400`} />
                        </div>
                    </Link>
                ))}
            </section>
        </>
    );
};

export default CollectionSettings;