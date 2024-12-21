import React from "react";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useRef } from "react";


const SearchBar = ({ setSearchActive }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus(); // Focus the input field when the component is rendered
        }
    }, []);
    return (
        <div>
            <div class="w-full max-w-sm min-w-[200px]">
                <div class="relative mt-2">
                    
                    <input
                     ref={inputRef}
                        type="text"
                        class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-12 pl-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Search" 
                        onBlur={() => setSearchActive(false)}
                        />

                    <button class="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-gray transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                    <IoIosSearch />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd"></path>
                        </svg> */}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;