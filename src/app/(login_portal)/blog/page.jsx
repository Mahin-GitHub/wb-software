"use client";
import Link from "next/link";
import { useState } from "react";

const Blog = () => {

  const [language, setLanguage] = useState(false);
  const categoriesEng = ["bangladesh", "campus", "cricket", "dhaka", "education", "football", "international", "election", "america", "entertainment", "law-and-justice"];
  const categoriesBan = ["বাংলাদেশ", "ক্যাম্পাস", "ক্রিকেট", "ঢাকা", "শিক্ষা", "ফুটবল", "আন্তর্জাতিক", "নির্বাচন", "আমেরিকা", "বিনোদন", "আইন-বিচার"];

  return (
    <div className="my-10 sm:mb-10 sm:mt-20">
      <h1 className="text-3xl font-bold mb-6">All Categories</h1>
      <ul className="space-y-3">
        {(language ? categoriesEng : categoriesBan).map((slug) => (
          <li key={slug}>
            <Link
              href={`/category/${slug}`}
              className="text-blue-500 hover:underline"
            >
              {slug.charAt(0).toUpperCase() + slug.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
