import jsIcon from '@/../../public/js.svg'
import Image from 'next/image'

export default function Skill(){
    return (
        <div className={'h-full flex flex-col  justify-center w-1/2'}>
            <div className="pl-4">
                <h1 className={'text-4xl'}>Skills</h1>
                <div className="pl-4 border-s-4 h-screen">
                    <div className="flex items-center pt-5">
                        <Image src={jsIcon} className='w-10 h-10'></Image>
                        <span className='ms-3 text-gray-600'>JavaScript</span>
                    </div>
                    <div className="flex items-center mt-5">
                        <Image src={jsIcon} className='w-10 h-10'></Image>
                        <span className='ms-3 text-gray-600'>JavaScript</span>
                    </div>
                    <div className="flex items-center mt-5">
                        <Image src={jsIcon} className='w-10 h-10'></Image>
                        <span className='ms-3 text-gray-600'>JavaScript</span>
                    </div>
                </div>
            </div>
        </div>
    )
}