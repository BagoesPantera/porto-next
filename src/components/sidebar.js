'use client'

import NavItem from "./nav-item"
import jsIcon from '@/../../public/js.svg'
import pythonIcon from '@/../../public/python.svg'
import goIcon from '@/../../public/go.svg'
import {VscChevronDown, VscChevronRight, VscFolder} from "react-icons/vsc";

export default function Sidebar() {

    return (
        <>
            <div className="w-full h-full bg-gray-200">
                <button data-drawer-target="sidebar" data-drawer-toggle="sidebar" aria-controls="sidebar" type="button" className="inline-flex items-center p-2 my-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
            </div>

            <aside id="sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-200" aria-label="sidebar">
                <div className="h-full overflow-y-auto">
                    <ul className="bg-gray-300">
                        <li>
                            <a href="#" className="flex items-center py-2 pl-2 text-gray-900">
                                <VscChevronDown />
                                <span className="ms-3">Pantera's Portfolio</span>
                            </a>
                        </li>
                    </ul>
                    <ul className=" font-medium bg-gray-200">
                        <li>
                            <NavItem icon={jsIcon} href='/'>index.js</NavItem>
                        </li>
                        <li className={'pl-5'}>
                            <button type="button"
                                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <VscChevronRight className={'w-5 h-5'}/>
                                <VscFolder />
                                <span
                                    className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">About</span>
                            </button>
                            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                                <li>
                                    <a href="#"
                                       className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">index</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">skill</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">hobbies</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavItem icon={goIcon} href='/project'>project.go</NavItem>
                        </li>
                        <li>
                            <NavItem icon={pythonIcon} href='/contact'>contact.py</NavItem>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}