'use client'

import NavItem from "./nav-item"
import jsIcon from '@/../../public/js.svg'
import pythonIcon from '@/../../public/python.svg'
import goIcon from '@/../../public/go.svg'

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
                                <svg className="w-5 h-5" viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -6684.000000)" fill="#000000">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39" id="arrow_down-[#339]"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span className="ms-3">Portfolio</span>
                            </a>
                        </li>
                    </ul>
                    <ul className=" font-medium bg-gray-200">
                        <li>
                            <NavItem icon={jsIcon} href='/'>index.js</NavItem>
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