'use client'
import Image from "next/image"

import reactIcon from '@/../../public/react.svg'
import vueIcon from '@/../../public/vue.svg'
import flutterIcon from '@/../../public/flutter.svg'
import djsIcon from '@/../../public/djs.svg'

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

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {
                    list.map((item) => (
                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col">
                            <a href={item.link} target="_blank">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{item.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
                            <div className="w-100 flex h-full items-end">
                                <a href={item.link} target="_blank" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                                    Visit
                                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                    </svg>
                                </a>
                                <div className="flex ms-auto">
                                    {item.tech.map((icon) => (
                                        <Image src={icon} className="ms-1 w-6 h-6" alt="icon" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}