import { FaCode } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";

export default function Hobbies(){
    return (
        <>
            <h1 className={'text-4xl text-gray-800'}>Hobbies</h1>
            <div className="pl-4 border-s-4 border-gray-300 h-fit py-5 flex flex-col items-center w-[75%] ">
                <div className="border-s-4 h-fit text-gray-600 py-5">
                    <div className="flex items-center pl-2">
                    <FaCode className="w-10 h-10 "/>
                        <span className='ms-3 text-gray-700 font-bold'>Code</span>
                    </div>
                    <div className="ms-7 mt-4">
                        <p>My passion for coding lies in the constant opportunity to explore new challenges and expand my skillset. In my free time, I actively engage in online coding platforms like HackerRank, Codewars, and LeetCode to tackle diverse problems and hone my programming abilities.</p>
                    </div>
                </div>
                <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                    <div className="flex items-center pl-2">
                        <IoGameController className="w-10 h-10"/>
                        <span className='ms-3 text-gray-700 font-bold'>Games</span>
                    </div>
                    <div className="ms-7 mt-4">
                        <p>In addition to coding, I enjoy gaming, particularly titles from Riot Games, like League of Legends, Valorant, and Legends of Runeterra. However, I haven't gotten into mobile games yet.</p>
                    </div>
                </div>
            </div>
        </>
    )
}