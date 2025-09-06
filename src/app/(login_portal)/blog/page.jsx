"use client";
import NewsCard from '@/Components/SharComponents/NewsCard'
import React, { useEffect, useState } from 'react'

const Blog = () => {

  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    fetch("https://wbsoft.work/api/get-homepage-data-for-mobile")
      .then(res => res.json())
      .then(data => setHomeData(data))
  }, []);

  const imgURL = "https://wbsoft.work/storage/uploads/newsImg/";


  return (
    <div className='w-full h-auto mx-auto sm:mb-12 px-2  py-4 sm:my-8l bg-white'>
      <div className='w-full h-auto mx-auto sm:mb-12 px-2     shadow-3xl bg-white'>


        <div>


          {
            homeData?.lattestNewsData?.map((cardNews, index) => {
              return (
                <div key={index}>
                  <NewsCard cardNews={cardNews} imgURL={imgURL} />

                </div>
              )
            })
          }

        </div>

      </div>

    </div>
  )
}

export default Blog