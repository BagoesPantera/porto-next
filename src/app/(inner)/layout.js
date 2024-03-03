'use client'
import BarItem from "@/components/bar-item";
import CodePage from "@/components/code-page";
import { useState } from "react";
import Image from "next/image";
import jsIcon from "@/../../public/js.svg";
import goIcon from "@/../../public/go.svg";
import pythonIcon from "@/../../public/python.svg";

export default function Layout({ children }) {
    const [previewToggle, setPreviewToggle] = useState(true)
    function handlePreviewToggle() {
        setPreviewToggle(!previewToggle)
    }
    return (
        <>
            <div className={`flex flex-col justify-between ${previewToggle ? 'overflow-hidden h-screen' : ''}`}>
                <div className={`pl-3 sm:ml-64 bg-gray-50   `}>
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-gray-200 rounded-t-lg h-7 -ms-3 bg-gray-100"
                        id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                        <li className="border-x-2 border-t-4 border-t-sky-500 flex items-center h-7 bg-gray-50">
                            <Image src={jsIcon} className='w-5 h-5 ms-1' alt='icon'></Image>
                            <a href="" className="inline-block p-4 font-bold">
                                index.js
                            </a>
                        </li>
                        <li className="border-x-2 flex items-center h-7">
                            <Image src={goIcon} className='w-5 h-5 ms-1' alt='icon'></Image>
                            <a href="" className="inline-block p-4">
                                project.go
                            </a>
                        </li>
                        <li className="border-x-2 flex items-center h-7">
                            <Image src={pythonIcon} className='w-5 h-5 ms-1' alt='icon'></Image>
                            <a href="" className="inline-block p-4">
                                contact.py
                            </a>
                        </li>
                    </ul>
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