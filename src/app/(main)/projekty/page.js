import React from 'react';
import ProjektyUi from "@/app/(main)/projekty/ProjektyUi";
import {getDbDataList} from "@/db/db-actions";

const Projekty = async () => {
    const technologyData = await getDbDataList("technologie")
    const projektyList = await getDbDataList("projekty")
    const technologieProjektu = await getDbDataList("relations_projekty_technologie", {technologie: true});
    return (
        <ProjektyUi projectsData={projektyList} techstackData={technologyData} technologieProjektu={technologieProjektu}/>
    );
};

export default Projekty;
export const revalidate = 3600;