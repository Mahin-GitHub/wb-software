import React from 'react'

const Category = async ({ params }) => {

    const paramsData = await params.slug;

    const res = await fetch(`https://wbsoft.work/api/category-wise-news/${paramsData}`);
    const categoryData = await res.json();
    console.log("Data --> ", categoryData);


    return (
        <div className='mt-20'>
            Category Data: {paramsData}
            <h2></h2>

            {/* <div>
                {
                    categoryData?.map((category, index) => {
                        return (
                            <div>

                            </div>
                        )
                    })
                }
            </div> */}
        </div>
    )
}

export default Category