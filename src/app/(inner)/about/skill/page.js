import Image from 'next/image'

import jsIcon from '@/../../public/js.svg'
import phpIcon from '@/../../public/php.svg'

export default function Skill() {
    return (
        <>
            <h1 className={'text-4xl text-gray-800'}>Tech Skills</h1>
            <div className="pl-4 border-s-4 border-gray-300 h-fit py-5 flex flex-col items-center w-[75%] ">
                <div className="border-s-4 h-fit text-gray-600 py-5">
                    <div className="flex items-center pl-2">
                        <Image src={jsIcon} className="w-10 h-10"></Image>
                        <span className='ms-3 text-gray-700 font-bold'>JavaScript</span>
                    </div>
                    <div className="ms-7 mt-4">
                        <p>I'm proficient in both frontend and backend development using JavaScript. I have experience working with various frameworks, including Vue, React, ExpressJS, and AdonisJS.</p>
                    </div>
                </div>
                <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                    <div className="flex items-center pl-2">
                        <Image src={phpIcon} className="w-10 h-10"></Image>
                        <span className='ms-3 text-gray-700 font-bold'>PHP</span>
                    </div>
                    <div className="ms-7 mt-4">
                        <p>While I possess strong experience in various programming languages, I gravitate towards PHP as my primary choice for projects. Laravel, a robust PHP framework, remains my go-to for both MVC and API-based development due to its efficiency and diverse functionalities.</p>
                    </div>
                </div>
            </div>
        </>
    )
}