'use client'
import BarItem from "@/components/bar-item";
import CodePage from "@/components/code-page";
import { useState } from "react";

export default function Layout({ children }) {
    const [previewToggle, setPreviewToggle] = useState(true)
    function handlePreviewToggle() {
        setPreviewToggle(!previewToggle)
    }
    return (
        <>
            <div className={`flex flex-col justify-between ${previewToggle ? 'overflow-hidden h-screen' : ''}`}>
                <div className={`pl-3 sm:ml-64 bg-gray-50   `}>
                    <div className="flex">
                        <BarItem/>
                        <label className="inline-flex items-center cursor-pointer ml-auto mt-2">
                            <input type="checkbox" value="" className="sr-only peer" checked={previewToggle}
                                   onChange={handlePreviewToggle}/>
                            <span
                                className={`ms-3 text-sm font-medium text-gray-900 me-2 ${previewToggle ? '' : 'font-bold'}`}>Code</span>
                            <div
                                className="relative w-11 h-6 bg-green-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span
                                className={`ms-2 text-sm font-medium text-gray-900 me-2 ${previewToggle ? 'font-bold' : ''}`}>Preview</span>
                        </label>
                    </div>
                    <div className="pr-3">
                        {previewToggle ? children : <CodePage/>}
                    </div>
                </div>
                {previewToggle &&
                    <footer className="bg-white shadow dark:bg-gray-800 z-50 h-10">
                        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#"
                                                                                          className="hover:underline">Pantera</a>. All Rights Reserved.
    </span>
                            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                                <li>
                                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                }

            </div>

        </>
    )
}