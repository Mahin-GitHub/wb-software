import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
    return (
        <div className="w-full ">
            <div className='w-full flex justify-center items-center gap-4 mt-8 sm:mt-20'>
                <div>
                    <FaSearch />
                </div>
                <div>
                    <input type="text" placeholder="Search Keyword" className="outline-0 border-b-1" />
                </div>
            </div>
        </div>
    )
}

export default Search