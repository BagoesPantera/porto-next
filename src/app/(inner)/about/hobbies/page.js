import { FaCode } from "react-icons/fa6";

export default function Hobbies(){
    return (
        <div className={'h-full flex flex-col  justify-center w-1/2'}>
            <div className="pl-4">
                <h1 className={'text-4xl'}>Hobbies</h1>
                <div className="pl-4 border-s-4 h-screen">
                    <div className="flex items-center pt-5">
                        <FaCode className="w-10 h-10 "/>
                        <span className='ms-3 text-gray-600'>Code</span>
                    </div>
                </div>
            </div>
        </div>
    )
}