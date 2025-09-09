"use client";
import CategoryCardSkeleton from "@/Components/Skeleton/CategoryCardSkeleton";
import Link from "next/link";
import { useEffect, useState } from "react";

const Categories = () => {

  const [language, setLanguage] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const categoriesEng = ["bangladesh", "campus", "cricket", "dhaka", "education", "football", "international", "election", "america", "entertainment", "law-and-justice"];
  const categoriesBan = ["বাংলাদেশ", "ক্যাম্পাস", "ক্রিকেট", "ঢাকা", "শিক্ষা", "ফুটবল", "আন্তর্জাতিক", "নির্বাচন", "আমেরিকা", "বিনোদন", "আইন-বিচার"];

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (showSkeleton) {
    return <CategoryCardSkeleton />;
  }
  return (

    <div className=" px-4 sm:my-10 ">
      <h1 className="text-3xl font-bold mb-6 text-center">All Categories</h1>

      {/* Language Toggle Button */}
      {/* <div className="flex justify-center mb-8">
        <button
          onClick={() => setLanguage(!language)}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:scale-105 transition-transform"
        >
          {language ? "Switch to বাংলা" : "Switch to English"}
        </button>
      </div> */}

      {/* Category Cards */}
      <div className="grid grid-cols-2  gap-4">
        {(language ? categoriesEng : categoriesBan).map((slug, index) => (
          <Link
            key={slug}
            href={`/category/${categoriesEng[index]}`}
          >
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-center text-center border hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h2 className="text-lg font-semibold text-gray-800">
                {slug.charAt(0).toUpperCase() + slug.slice(1)}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
