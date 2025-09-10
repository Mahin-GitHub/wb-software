// "use client";
// import SearchPageSkeleton from '@/Components/Skeleton/SearchPageSkeleton';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react'
// import { FaSearch } from 'react-icons/fa'

// const Search = () => {

//     const [term, setTerm] = useState("");
//     const [results, setResults] = useState([]);
//     const [debouncedTerm, setDebouncedTerm] = useState(term);
//     const imgURL = "https://wbsoft.work/storage/uploads/newsImg/";


//     const handleSearch = async () => {
//         const res = await fetch("https://wbsoft.work/api/search-news-data", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ search_value: term }),
//         });
//         const data = await res.json();
//         setResults(data?.searchNewsData?.data || []);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         handleSearch();
//         setTerm("");

//     }

//     const [showSkeleton, setShowSkeleton] = useState(true);
//     useEffect(() => {

//         const timer = setTimeout(() => {
//             setShowSkeleton(false);
//         }, 1000);

//         return () => clearTimeout(timer);
//     }, []);

//     if (showSkeleton) {
//         return <SearchPageSkeleton />;
//     }


//     return (
//         <div className="w-full ">
//             <div className='w-full mt-8 sm:mt-12'>
//                 <div className="w-full flex justify-center items-center gap-4">

//                     <div>
//                         <FaSearch />
//                     </div>
//                     <div>
//                         <form action="" onSubmit={handleSubmit}>

//                             <input
//                                 type="text"
//                                 value={term}
//                                 onChange={(e) => setTerm(e.target.value)}
//                                 placeholder="Search Keyword"
//                                 className="outline-0 border-b-1 flex-grow"
//                             />

//                         </form>

//                     </div>
//                     <button onClick={handleSubmit} type="submit" className='bg-blue-400 p-1 cursor-pointer'>Search</button>
//                 </div>

//                 <div className='mt-10'>

//                     {
//                         results?.map((data, index) => {
//                             return (

//                                 <div key={index} className="card w-full shadow-sm">
//                                     <Link href={`news-details/${data?.slug_bn}`}>
//                                         <figure>
//                                             <Image
//                                                 className='w-full h-full'
//                                                 src={`${imgURL}${data?.photo}`}
//                                                 width={500}
//                                                 height={500}
//                                                 alt='Image'
//                                             />
//                                         </figure>
//                                         <div className="px-2 py-4">

//                                             <p className='line-clamp-2'>{data?.title_bn}</p>

//                                         </div>
//                                     </Link>

//                                 </div>
//                             )
//                         })
//                     }
//                 </div>



//             </div>
//         </div>
//     )
// }

// export default Search


"use client";
import SearchPageSkeleton from '@/Components/Skeleton/SearchPageSkeleton';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const imgURL = "https://wbsoft.work/storage/uploads/newsImg/";

    const handleSearch = async () => {
        setLoading(true); // show skeleton
        try {
            const res = await fetch("https://wbsoft.work/api/search-news-data", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ search_value: term }),
            });
            const data = await res.json();
            setResults(data?.searchNewsData?.data || []);
        } catch (error) {
            console.error("Search error:", error);
        } finally {
            setLoading(false); // hide skeleton
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!term.trim()) return;
        handleSearch();
        setTerm("");
    };

    // Show skeleton during search
    if (loading) {
        return <SearchPageSkeleton resultsCount={5} results={results} />; // 5 placeholder items
    }

    return (
        <div className="w-full mt-8 sm:mt-12">
            {/* Search bar */}
            <div className='w-full flex justify-center items-center gap-4 mb-8'>
                <FaSearch />
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        placeholder="Search Keyword"
                        className="outline-0 border-b border-gray-300 px-2 py-1"
                    />
                    <button type="submit" className='bg-blue-400 text-white px-3 py-1 rounded'>Search</button>
                </form>
            </div>

            {/* Search results */}
            <div className='mt-10 grid grid-cols-1 gap-4'>
                {results.map((data, index) => (
                    <div key={index} className="card w-full shadow-sm">
                        <Link href={`news-details/${data?.slug_bn}`}>
                            <figure>
                                <Image
                                    className='w-full h-full object-cover'
                                    src={`${imgURL}${data?.photo}`}
                                    width={500}
                                    height={500}
                                    alt='Image'
                                />
                            </figure>
                            <div className="px-2 py-4">
                                <p className='line-clamp-2'>{data?.title_bn}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
