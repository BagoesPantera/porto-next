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
                        <p>I enjoy coding as a way to explore new challenges and continuously expand my skills. In my free time, I practice on platforms like HackerRank, Codewars, and LeetCode, solving problems that sharpen my programming and problem-solving abilities.</p>
                    </div>
                </div>
                <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                    <div className="flex items-center pl-2">
                        <IoGameController className="w-10 h-10"/>
                        <span className='ms-3 text-gray-700 font-bold'>Games</span>
                    </div>
                    <div className="ms-7 mt-4">
                        <p>Outside of coding, I enjoy playing games, particularly titles from Riot Games such as League of Legends, VALORANT, and Legends of Runeterra. I enjoy exploring different game mechanics and strategies, especially in competitive games.</p>
                    </div>
                </div>
            </div>
        </>
    )
}