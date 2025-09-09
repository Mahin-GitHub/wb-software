
import React from 'react'
import NewsDetails from './NewsDetails';

const page = async ({ params }) => {

    const paramsData = await params.slug;

    const res = await fetch(`https://wbsoft.work/api/news-details/${paramsData}`);

    const newsDetails = await res.json();
    console.log("News Data --> ", newsDetails?.singleNewsData);
    const imgURL = "https://wbsoft.work/storage/uploads/newsImg/"
    const singleData = newsDetails?.singleNewsData;


    return (
        <>
            <NewsDetails newsDetails={newsDetails} imgURL={imgURL} singleData={singleData} />
        </>
    )
}

export default page