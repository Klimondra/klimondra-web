import React from 'react';
import HomepageUi from "@/app/(main)/homepageUi";
import {getDbDataList} from "@/db/db-actions";

const Home = async () => {
    const technologyData = await getDbDataList("technologie")

    return (
        <>
            <HomepageUi technologyData={technologyData}/>
        </>
    );
};

export default Home;
export const revalidate = 3600;