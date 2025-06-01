import React from 'react';
import LinktreeUi from "@/app/(main)/odkazy/LinktreeUi";
import {getDbDataList} from "@/db/db-actions";

const Linktree = async () => {
    const data = await getDbDataList("linktree")

    return (
        <LinktreeUi data={data}/>
    );
};

export default Linktree;
export const revalidate = 3600;

