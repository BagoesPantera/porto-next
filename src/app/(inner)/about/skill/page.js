import Image from 'next/image'

import jsIcon from '@/../../public/js.svg'
import phpIcon from '@/../../public/php.svg'

export default function Skill() {
    return (
        <>
            <h1 className={'text-4xl text-gray-800'}>Skils</h1>
            <div className="pl-4 border-s-4 border-gray-300 h-fit py-5 flex flex-col items-center w-[75%] ">
                <div className="border-s-4 h-fit text-gray-600 py-5">
                    <div className="flex items-center pl-2">
                        <Image src={jsIcon} className="w-10 h-10"></Image>
                        <span className='ms-3 text-gray-700 font-bold'>JavaScript</span>
                    </div>
                    <div className="ms-7 mt-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, quis eaque sint quod eius sequi voluptates vero excepturi repudiandae, quae modi ab numquam animi a amet placeat ipsa non mollitia.</p>
                    </div>
                </div>
                <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                    <div className="flex items-center pl-2">
                        <Image src={phpIcon} className="w-10 h-10"></Image>
                        <span className='ms-3 text-gray-700 font-bold'>PHP</span>
                    </div>
                    <div className="ms-7 mt-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, quis eaque sint quod eius sequi voluptates vero excepturi repudiandae, quae modi ab numquam animi a amet placeat ipsa non mollitia.</p>
                    </div>
                </div>
            </div>
        </>
    )
}