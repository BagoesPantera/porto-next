'use client'
import Image from "next/image"

import reactIcon from '@/../../public/react.svg'
import vueIcon from '@/../../public/vue.svg'
import flutterIcon from '@/../../public/flutter.svg'
import djsIcon from '@/../../public/djs.svg'
import arrowIcon from '@/../../public/arrow.svg'
import ProjectCard from "@/components/project-card"
import { FaBookBookmark } from "react-icons/fa6";
import { MdPushPin } from "react-icons/md";

export default function Project() {
    const list = [
        {
            title: "Mardi",
            description: "An online markdown text editor.",
            link: "https://bagoespantera.github.io/markdown-editor-react/",
            tech: [reactIcon]
        },
        {
            title: "IP Tracking",
            description: "An Ip Tracker that could track IPV4, IPV6 and show you the map!",
            link: "https://bagoespantera.github.io/ip-tracking-vue/",
            tech: [vueIcon]
        },
        {
            title: "socloudy",
            description: "A weather app.",
            link: "https://github.com/BagoesPantera/socloudy",
            tech: [flutterIcon]
        },
        {
            title: "Ruma",
            description: "An anime discord bot.",
            link: "https://github.com/neophrastic/ruma-discordjs",
            tech: [djsIcon]
        }
    ]

    const repoList = [
        {
            title: "Backend",
            description: "List of my public backend project repository",
            link: "https://github.com/moschiferous",
        },
        {
            title: "Frontend",
            description: "List of my public frontend project repository",
            link: "https://github.com/selenolatry"
        },
        {
            title: "Laboratory 🔬",
            description: "I just try anything new(for me) here",
            link: "https://github.com/neophrastic"
        }
    ]

    return (
        <>
            <div className={'flex flex-col lg:h-[100%]  justify-center'}>
                <div className="pl-4">
                    <h1 className={'text-4xl text-gray-800'}>Projects</h1>
                    <div className="pl-4 border-s-4 border-gray-300 lg:h-[60vh] flex flex-col items-center w-[75%] ">
                        <div className="border-s-4 h-fit mt-10 text-gray-600 py-5">
                            <div className="flex items-center pl-2">
                                <Image src={reactIcon} className="w-10 h-10"></Image>
                                <span className='ms-3 text-gray-700'>Mardi</span>
                            </div>
                            <div className="ms-7 mt-4">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, quis eaque sint quod eius sequi voluptates vero excepturi repudiandae, quae modi ab numquam animi a amet placeat ipsa non mollitia.</p>
                                <a href="" className="underline text-sky-500">Visit</a>
                                {/* <p className="text-gray-50">2sadasd</p> */}
                            </div>
                        </div>
                        <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                            <div className="flex items-center pl-2">
                                <Image src={vueIcon} className="w-10 h-10"></Image>
                                <span className='ms-3 text-gray-700'>IP Tracker</span>
                            </div>
                            <div className="ms-7 mt-4">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, quis eaque sint quod eius sequi voluptates vero excepturi repudiandae, quae modi ab numquam animi a amet placeat ipsa non mollitia.</p>
                                <a href="" className="underline text-sky-500">Visit</a>
                            </div>
                        </div>
                        <p className="text-gray-50">2sadasd</p>
                    </div>
                </div>
                <p className="text-gray-50">2sadasd</p>
            </div>
        </>
    )
}