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
        <div className="flex items-center">
            <MdPushPin />
            <p className="text-gray-800 ms-2">Pinned Projects</p>
        </div>
            <div className="grid grid-cols-2 mt-2 md:grid-cols-3 gap-2 2xl:grid-cols-4 w-full h-full">
                {
                    list.map((item, i) => (
                        <ProjectCard item={item} index={i} />
                    ))
                }
            </div>
            {/* <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-gray-900 border-0 w-full" />
                <div className="absolute px-4 -translate-x-1/2 bg-gray-50 flex left-1/2">
                    <Image src={arrowIcon} className="w-5 h-5 rotate-90"  alt={'icon'}/>
                    <Image src={arrowIcon} className="w-5 h-5 -rotate-90"  alt={'icon'}/>
                </div>
            </div> */}
            <div className="flex items-center mt-4">

                <FaBookBookmark />
                <p className="text-gray-800 ms-2">Repository</p>
            </div>
            {
                repoList.map((item, i) => (
                    <>
                    <ProjectCard item={item} index={i}></ProjectCard>
                    <p className="mt-2"></p>
                    </>
                ))
            }
        </>
    )
}