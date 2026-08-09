'use client'
import Image from "next/image"

import reactIcon from '@public/react.svg'
import vueIcon from '@public/vue.svg'
import flutterIcon from '@public/flutter.svg'
import nuxtIcon from '@public/nuxt.svg'
import discordIcon from '@public/discord.svg'
import fabricIcon from '@public/fabric.png'

export default function Project() {
    return (
        <> 
            <div className={'flex flex-col'}>
                <div className="pl-4">
                    <h1 className={'text-4xl text-gray-800'}>Personal Projects</h1>
                    <div className="pl-4 border-s-4 border-gray-300 h-fit py-5 flex flex-col items-center w-[75%] ">
                        <div className="border-s-4 h-fit text-gray-600 py-5">
                            <div className="flex items-center pl-2">
                                <Image src={reactIcon} className="w-10 h-10" alt="React logo"></Image>
                                <span className='ms-3 text-gray-700'>Mardi</span>
                            </div>
                            <div className="ms-7 mt-4">
                                <p>I built this online Markdown editor using React and Tailwind CSS, motivated by the difficulty I faced when creating well-formatted README files for my GitHub repositories.</p>
                                <a href="https://bagoespantera.github.io/markdown-editor-react" target='_blank' className="underline text-sky-500">Visit</a>
                            </div>
                        </div>
                        <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                            <div className="flex items-center pl-2">
                                <Image src={flutterIcon} className="w-10 h-10" alt="Flutter logo"></Image>
                                <span className='ms-3 text-gray-700'>CCTV Bali</span>
                            </div>
                            <div className="ms-7 mt-4">
                                <p>An unofficial Bali CCTV mobile application built with Flutter, providing access to publicly available road CCTV feeds through an API provided by the Bali Transportation Agency (Dishub).</p>
                                <a href="https://github.com/BagoesPantera/cctv-bali" target='_blank' className="underline text-sky-500">Visit</a>
                            </div>
                        </div>
                        <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                            <div className="flex items-center pl-2">
                                <Image src={nuxtIcon} className="w-10 h-10" alt="Nuxt logo"></Image>
                                <span className='ms-3 text-gray-700'>Nether Calculator</span>
                            </div>
                            <div className="ms-7 mt-4">
                                <p>A small web application built with Nuxt that helps players calculate and link Overworld and Nether portal coordinates in Minecraft, making it easier to plan portal connections.</p>
                                <a href="https://bagoespantera.github.io/nether-calculator-nuxt" target='_blank' className="underline text-sky-500">Visit</a>
                            </div>
                        </div>
                        <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                            <div className="flex items-center pl-2">
                                <Image src={flutterIcon} className="w-10 h-10" alt="Flutter logo"></Image>
                                <span className='ms-3 text-gray-700'>SoCloudy</span>
                            </div>
                            <div className="ms-7 mt-4">
                                <p>A weather application for Android built with Flutter, integrating weather data from external APIs to provide users with current weather information through a simple mobile interface.</p>
                                <a href="https://github.com/BagoesPantera/socloudy" target='_blank' className="underline text-sky-500">Visit</a>
                            </div>
                        </div>
                        <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                            <div className="flex items-center pl-2">
                                <Image src={vueIcon} className="w-10 h-10" alt="Vue logo"></Image>
                                <span className='ms-3 text-gray-700'>IP Tracker</span>
                            </div>
                            <div className="ms-7 mt-4">
                                <p>This IP Tracker, built with Vue.js and Tailwind CSS, supports both IPv4 and IPv6 addresses. I created it to explore Vue.js and integrate mapping functionality using OpenStreetMap and Leaflet.js.</p>
                                <a href="https://bagoespantera.github.io/ip-tracking-vue" target='_blank' className="underline text-sky-500">Visit</a>
                            </div>
                        </div>
                        <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                            <div className="flex items-center pl-2">
                                <Image src={discordIcon} className="w-10 h-10" alt="Discord logo"></Image>
                                <span className='ms-3 text-gray-700'>Ruma</span>
                            </div>
                            <div className="ms-7 mt-4">
                                <p>An anime-themed Discord bot built with Discord.js, providing anime-related information and features directly within Discord. I built it to explore bot development, API integration, and event-driven programming.</p>
                                <a href="https://github.com/neophrastic/ruma-discordjs" target='_blank' className="underline text-sky-500">Visit</a>
                            </div>
                        </div>
                        <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                            <div className="flex items-center pl-2">
                                <Image src={fabricIcon} className="w-10 h-10" alt="Fabric logo"></Image>
                                <span className='ms-3 text-gray-700'>Foot Loot Mod</span>
                            </div>
                            <div className="ms-7 mt-4">
                                <p>A simple Minecraft Fabric mod for version 1.20.1 that makes blocks spawn their corresponding items when stepped on without breaking them. Drops are triggered when the player walks or jumps on a block.</p>
                                <a href="https://github.com/BagoesPantera/foot-loot-mc" target='_blank' className="underline text-sky-500">Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* just a spacing */}
            <div className="h-fit mt-2 lg:mt-10 text-gray-600 py-5"></div>
        </>
    )
}