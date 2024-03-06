'use client'
import Image from "next/image"

import reactIcon from '@/../../public/react.svg'
import vueIcon from '@/../../public/vue.svg'

export default function Project() {
    return (
        <> 
            <div className={'flex flex-col'}>
                <div className="pl-4">
                    <h1 className={'text-4xl text-gray-800'}>Featured Projects</h1>
                    <div className="pl-4 border-s-4 border-gray-300 h-fit py-5 flex flex-col items-center w-[75%] ">
                        <div className="border-s-4 h-fit text-gray-600 py-5">
                            <div className="flex items-center pl-2">
                                <Image src={reactIcon} className="w-10 h-10"></Image>
                                <span className='ms-3 text-gray-700'>Mardi</span>
                            </div>
                            <div className="ms-7 mt-4">
                                <p>I built this online Markdown editor using React and Tailwind CSS. It was motivated by the difficulty I faced in creating a good README file for my GitHub repository.</p>
                                <a href="https://bagoespantera.github.io/markdown-editor-react/" target='_blank' className="underline text-sky-500">Visit</a>
                            </div>
                        </div>
                        <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                            <div className="flex items-center pl-2">
                                <Image src={vueIcon} className="w-10 h-10"></Image>
                                <span className='ms-3 text-gray-700'>IP Tracker</span>
                            </div>
                            <div className="ms-7 mt-4">
                                <p>This IP Tracker, built with Vue.js and Tailwind CSS, supports both IPv4 and IPv6 addresses. I created it to explore Vue.js and map functionalities using OpenStreetMap and Leaflet.js.</p>
                                <a href="https://bagoespantera.github.io/ip-tracking-vue/" target='_blank' className="underline text-sky-500">Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}