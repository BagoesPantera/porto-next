import Image from 'next/image'

import laravelIcon from '@public/laravel.svg'
import reactIcon from '@public/react.svg'
import awsIcon from '@public/aws.svg'
import databaseIcon from '@public/database.png'




export default function Skill() {
    return (
        <>
            <h1 className={'text-4xl text-gray-800'}>Tech Skills</h1>
            <div className="pl-4 border-s-4 border-gray-300 h-fit py-5 flex flex-col items-center w-[75%] ">
                <div className="border-s-4 h-fit text-gray-600 py-5">
                    <div className="flex items-center pl-2">
                        <Image src={laravelIcon} className="w-10 h-10" alt="Laravel logo"></Image>
                        <span className='ms-3 text-gray-700 font-bold'>Laravel</span>
                    </div>
                    <div className="ms-7 mt-4">
                        <p>I specialize in building full-stack web applications using Laravel and PHP, covering backend architecture, REST API development, database design, authentication, authorization, and business logic. Laravel is my primary framework for building scalable and maintainable web applications.</p>
                    </div>
                </div>
                <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                    <div className="flex items-center pl-2">
                        <Image src={reactIcon} className="w-10 h-10" alt="React logo"></Image>
                        <span className='ms-3 text-gray-700 font-bold'>Frontend</span>
                    </div>
                    <div className="ms-7 mt-4">
                        <p>Experienced in building responsive and interactive interfaces using React.js, Vue.js, Livewire, Filament, and Blade, with a focus on clean integration between frontend components and backend services.</p>
                    </div>
                </div>
                <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                    <div className="flex items-center pl-2">
                        <Image src={databaseIcon} className="w-10 h-10" alt="Database logo"></Image>
                        <span className='ms-3 text-gray-700 font-bold'>Database & Backend</span>
                    </div>
                    <div className="ms-7 mt-4">
                        <p>Experienced with MySQL, PostgreSQL, and Redis for designing and managing data-driven applications, including database architecture, query optimization, caching, and application workflows.</p>
                    </div>
                </div>
                <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                    <div className="flex items-center pl-2">
                        <Image src={awsIcon} className="w-10 h-10" alt="AWS logo"></Image>
                        <span className='ms-3 text-gray-700 font-bold'>Deployment & Infrastructure</span>
                    </div>
                    <div className="ms-7 mt-4">
                        <p>Experienced in deploying and maintaining applications across VPS, cPanel, and AWS environments. I have also built custom automated deployment workflows to streamline application releases and updates.</p>
                    </div>
                </div>
            </div>
            <div className="h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                    
                </div>
        </>
    )
}