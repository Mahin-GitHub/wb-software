import NewsCard from "@/Components/SharComponents/NewsCard";
import Link from "next/link";

const CategoryPage = async ({ params }) => {
    const slug = params.slug;

    // API fetch
    const res = await fetch(`https://wbsoft.work/api/category-wise-news/${slug}`);
    const categoryWiseData = await res.json();
    console.log(categoryWiseData);

    const imgURL = "https://wbsoft.work/storage/uploads/newsImg/";
    return (
        <div className=" mt-2 sm:my-8 ">

            <div>
                {
                    categoryWiseData?.newsData?.data?.map((cardNews, index) => {
                        return (
                            <div key={index}>
                                <Link href={`/news-details/${cardNews?.slug_bn}`}>
                                    <NewsCard cardNews={cardNews} imgURL={imgURL} />
                                </Link>

                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default CategoryPage;
