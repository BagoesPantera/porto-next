'use client'
import Image from "next/image"

import laravelIcon from '@public/laravel.svg'

export default function Project() {
    return (
        <> 
            <div className={'flex flex-col'}>
                <div className="pl-4">
                    <h1 className={'text-4xl text-gray-800'}>Professional Projects</h1>
                    <div className="pl-4 border-s-4 border-gray-300 h-fit py-5 flex flex-col items-center w-[75%] ">
                        <div className="border-s-4 h-fit text-gray-600 py-5">
                            <div className="flex items-center pl-2">
                                <Image src={laravelIcon} className="w-10 h-10" alt="Laravel logo"></Image>
                                <span className='ms-3 text-gray-700'>Legal Aid Information System (SIDBANKUM)</span>
                            </div>
                            <div className="ms-7 mt-4">
                                <p>A digital legal aid workflow connecting Legal Aid Organizations (OBH) with the Bali Provincial Government, built with Laravel to streamline beneficiary applications, verification, and government approval processes.</p>
                            </div>
                        </div>
                        <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                            <div className="flex items-center pl-2">
                                <Image src={laravelIcon} className="w-10 h-10" alt="Laravel logo"></Image>
                                <span className='ms-3 text-gray-700'>Billiard Management System</span>
                            </div>
                            <div className="ms-7 mt-4">
                                <p>A complete billiard business management solution built with Laravel, covering table booking, billing, F&B transactions, and membership management, with Raspberry Pi integration for automated table lighting.</p>
                            </div>
                        </div>
                        <div className="border-s-4 h-fit mt-2 lg:mt-10 text-gray-600 py-5">
                            <div className="flex items-center pl-2">
                                <Image src={laravelIcon} className="w-10 h-10" alt="Laravel logo"></Image>
                                <span className='ms-3 text-gray-700'>Smart UMKM</span>
                            </div>
                            <div className="ms-7 mt-4">
                                <p>An e-learning and management platform for small businesses under Primakara University, powered by Laravel Filament with course material management, assignment workflows, and role-based access for admins, trainers, and students.</p>
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