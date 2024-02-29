'use client'
import BarItem from "@/components/bar-item";
import CodePage from "@/components/code-page";
import { useState } from "react";

export default function Layout({ children }) {
    const [previewToggle, setPreviewToggle] = useState(true)
    function handlePreviewToggle(){
        setPreviewToggle(!previewToggle)
    }
    return (
        <>
            <div className=" pl-3 sm:ml-64 bg-gray-50 h-screen overflow-hidden">
                <div className="flex">
                    <BarItem />
                    <label class="inline-flex items-center cursor-pointer ml-auto mt-2">
                        <input type="checkbox" value="" class="sr-only peer" checked={previewToggle} onChange={handlePreviewToggle}/>
                        <span class="ms-3 text-sm font-medium text-gray-900 me-2">Code</span>
                        <div class="relative w-11 h-6 bg-green-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ms-2 text-sm font-medium text-gray-900 me-2">Preview</span>
                    </label>
                </div>

                {/* <div className="absolute p-0 font-light text-slate-400 text-right select-none overflow-hidden">
               {lineNum}
            </div> */}
                <div className="p-4 overflow-hidden h-screen">
                    {previewToggle ? children : <CodePage/>}
                    {/* <IndexCode/> */}
                </div>
            </div>
            <div className="">
                <h1 className="absolute text-2xl">tes</h1>
                {children}
            </div>
        </>
    )
}