import React from 'react';
import {getDbDataList} from "@/utils/db-actions";

const Page = async () => {
    const data = await getDbDataList("Linktree")

    return (
        <div>
            {
                data.map((one) => {
                    return <p key={one.id}>{one.label}</p>
                })
            }
        </div>
    );
};

export default Page;