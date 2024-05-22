'use client'
import TypeIt from "typeit-react";
import Image from "next/image";
import photo from "@/../public/photo.png"

export default function Home() {
   return (
      <>
         <div className="mb-4 pl-5 items-center lg:h-[90vh] flex flex-col-reverse lg:flex-row">
            <div className="flex flex-col gap-1 items-start justify-start rounded bg-gray-50 h-50 space-y-4 lg:w-[75%]">

               <span className={'text-xl text-gray-500'}>Hello! I am</span>
               <span className="text-6xl font-bold">
                  Bagoes Pantera
               </span>
               <div className="flex text-gray-600 text-base">
                  <span>a </span>
                  <TypeIt
                     className='ms-3'
                     options={
                        {speed: 200,
                        loop: true}
                     }
                  getBeforeInit={(instance) => {
                     instance.type("Backend Developer", { delay: 1000 })
                        .delete()
                        .type("Kpoper", { delay: 1000 })
                        .delete()
                        .type("Weeb", { delay: 1000 })

                     return instance
                  }} />
               </div>

            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-[40vh] w-[50%]">
               {/*<Image src={photo} />*/}
            </div>
         </div>
      </>
   );
}
