import React from 'react';
import ProjektyUi from "@/app/projekty/ProjektyUi";
import {projektyList} from "@/db/projekty";
import {techstackList} from "@/db/techstack";

const Projekty = () => {
    return (
        <ProjektyUi projectsData={projektyList} techstackData={techstackList}/>
    );
};

export default Projekty;
export const revalidate = 3600;