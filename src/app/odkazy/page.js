import React from 'react';
import LinktreeUi from "@/app/odkazy/LinktreeUi";
import {linktreeList} from "@/db/linktree";

const Linktree = () => {
    return (
        <LinktreeUi data={linktreeList}/>
    );
};

export default Linktree;
export const revalidate = 3600;

