'use client'

import TopNavItem from "./top-nav-item";

import jsIcon from "@/../../public/js.svg";
import goIcon from "@/../../public/go.svg";
import pythonIcon from "@/../../public/python.svg";

export default function TopNav() {
    return (
        <>
            <ul className="flex flex-warp text-sm font-medium text-center text-gray-500 border-gray-200 rounded-t-lg h-7 -ms-3 bg-gray-100">
                <li>
                    <TopNavItem icon={jsIcon} href='/'>index.js</TopNavItem>
                </li>
                <li>
                    <TopNavItem icon={goIcon} href='/project'>project.go</TopNavItem>
                </li>
                <li>
                    <TopNavItem icon={pythonIcon} href='/contact'>contact.py</TopNavItem>
                </li>
            </ul>
        </>
    )
}
