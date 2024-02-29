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
                    <label className="inline-flex items-center cursor-pointer ml-auto mt-2">
                        <input type="checkbox" value="" className="sr-only peer" checked={previewToggle} onChange={handlePreviewToggle}/>
                        <span className={`ms-3 text-sm font-medium text-gray-900 me-2 ${previewToggle? '' : 'font-bold'}`}>Code</span>
                        <div className="relative w-11 h-6 bg-green-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className={`ms-2 text-sm font-medium text-gray-900 me-2 ${previewToggle? 'font-bold' : ''}`}>Preview</span>
                    </label>
                </div>
                <div className="p-4 overflow-hidden h-screen">
                    {previewToggle ? children : <CodePage/>}
                </div>
            </div>
        </>
    )
}