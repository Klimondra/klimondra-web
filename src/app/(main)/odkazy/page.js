import React from 'react';
import LinktreeUi from "@/app/(main)/odkazy/LinktreeUi";
import {linktreeList} from "@/db/linktree";

const Linktree = () => {
    return (
        <LinktreeUi data={linktreeList}/>
    );
};

export default Linktree;
export const revalidate = 3600;

