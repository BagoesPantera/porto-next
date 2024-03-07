'use client'
import BarItem from "@/components/bar-item";
import CodePage from "@/components/code-page";
import TopNav from "@/components/top-nav";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import { VscRemote, VscSourceControl, VscSync, VscError, VscWarning } from "react-icons/vsc";
import { FaGithub, FaHackerrank } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { SiLeetcode, SiCodewars } from "react-icons/si";

export default function Layout({ children }) {
    const [previewToggle, setPreviewToggle] = useState(true)
    function handlePreviewToggle() {
        setPreviewToggle(!previewToggle)
    }
    const pathName = usePathname()
    const paths = ['/about/skill', '/about/hobbies']
    return (
        <>
            <div className={`flex flex-col justify-between ${previewToggle ? 'overflow-hidden' : ''}`}>
                <div className={`pl-3 sm:ml-64 bg-gray-50   `}>
                    <TopNav />
                    <div className="flex">
                        <BarItem />
                        <label className="inline-flex items-center cursor-pointer ml-auto mt-2">
                            <input type="checkbox" value="" className="sr-only peer" checked={previewToggle}
                                onChange={handlePreviewToggle} />
                            <span
                                className={`ms-3 text-sm font-medium text-gray-900 me-2 ${previewToggle ? '' : 'font-bold'}`}>Code</span>
                            <div
                                className="relative w-11 h-6 bg-green-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span
                                className={`ms-2 text-sm font-medium text-gray-900 me-2 ${previewToggle ? 'font-bold' : ''}`}>Preview</span>
                        </label>
                    </div>
                    <div className="pr-3">
                        {previewToggle ? children : <CodePage />}
                    </div>
                </div>
                {previewToggle &&
                    <footer className={`bg-white shadow z-50 h-10 ${!paths.includes(pathName) ? 'fixed bottom-0 w-full' : 'mt-3'} flex md:fixed md:bottom-0 md:w-full`}>
                        <div className="w-full flex justify-between">
                            <div className="flex text-sm text-gray-500">
                                <div className="bg-gray-700 p-0 m-0 h-full items-center flex w-10 justify-center">
                                    <VscRemote color="white" className="w-6 h-6" />
                                </div>
                                <div className="hidden md:flex items-center ms-2 gap-2">
                                    <VscSourceControl />
                                    <span>main</span>
                                    <VscSync />
                                </div>
                                <div className="flex items-center ms-3 gap-2">
                                    <div className="flex items-center">
                                        <VscError />
                                        0
                                    </div>
                                    <div className="flex items-center">
                                        <VscWarning />
                                        0
                                    </div>
                                </div>

                            </div>
                            <ul className="flex flex-wrap items-center text-sm text-sm text-gray-500 sm:mt-0">
                                <li className="flex items-center">
                                    <a href="https://github.com/BagoesPantera" target="_blank" className="flex hover:underline">
                                        <FaGithub className="w-5 h-5 me-4 md:me-1" />
                                        <span className="hidden md:me-4 md:block">BagoesPantera</span>
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <a href="https://www.instagram.com/bagoespantera/" target="_blank" className="flex hover:underline">
                                        <IoLogoInstagram className="w-5 h-5 me-4 md:me-1" />
                                        <span className="hidden md:me-4 md:block">bagoespantera</span>
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <a href="https://www.hackerrank.com/bagoespantera" target="_blank" className="flex hover:underline">
                                        <FaHackerrank className="w-5 h-5 me-4 md:me-1" />
                                        <span className="hidden md:me-4 md:block">bagoespantera</span>
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <a href="https://leetcode.com/panteraa/" target="_blank" className="flex hover:underline">
                                        <SiLeetcode className="w-5 h-5 me-4 md:me-1" />
                                        <span className="hidden md:me-4 md:block">panteraa</span>
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <a href="https://www.codewars.com/users/panteraa" target="_blank" className="flex hover:underline">
                                        <SiCodewars className="w-5 h-5 me-4 md:me-1" />
                                        <span className="hidden md:me-4 md:block">panteraa</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                }

            </div>

        </>
    )
}