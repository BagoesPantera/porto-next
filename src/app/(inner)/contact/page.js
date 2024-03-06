'use client'
import { useState } from "react"
import Swal from 'sweetalert2'

export default function Contact() {
    const [inputEmail, setInputEmail] = useState('')
    const [inputContent, setInputContent] = useState('')
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    async function sendMessage(email, content) {
        const resp = await fetch(`https://api.telegram.org/bot7130211581:AAFTP6o4NQ98hvoEx8MPRxJ4clLkiHSHMms/sendMessage?chat_id=5248458263&text=<${email}>${content}`)
        if (resp.ok) {
            Toast.fire({
                icon: "success",
                title: "Thanks for contacting me 😉"
            });
            setInputEmail('')
            setInputContent('')
        } else {
            Toast.fire({
                icon: "error",
                title: "Failed to contact me :("
            });
        }
    }
    return (
        <>
            <div className={'flex flex-col'}>
                <div className="pl-4">
                    <h1 className={'text-4xl text-gray-800'}>Contact me</h1>
                    <div className="border-s-4 border-gray-300 h-fit py-5 flex flex-col  w-[75%] ">
                        <form action="">
                            <div className="ms-7 mt-4">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="your.name@company.com" required value={inputEmail} onChange={(e) => { setInputEmail(e.currentTarget.value) }} />
                            </div>
                            <div className="ms-7 mt-4">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" value={inputContent} onChange={(e) => { setInputContent(e.currentTarget.value) }}></textarea>
                            </div>
                            <div className="ms-7 mt-4">
                                <button type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-fit" onClick={(e) => { e.preventDefault(); sendMessage(inputEmail, inputContent) }}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}