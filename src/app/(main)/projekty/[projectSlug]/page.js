import React from 'react';
import SingleProjectPage from "@/app/(main)/projekty/[projectSlug]/oneProjectUi";
import {getDbDataList} from "@/db/db-actions";

const SingleProject = async () => {
    const projectData = await getDbDataList("projekty")
    const technologieProjektu = await getDbDataList("relations_projekty_technologie", {technologie: true});

    return (
        <>
          <SingleProjectPage projektyList={projectData} technologieProjektu={technologieProjektu}/>
        </>
    );
};

export default SingleProject;
export const revalidate = 3600;