'use client'
import TypeIt from "typeit-react";
import Image from "next/image";

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
               <img src="https://cdn.discordapp.com/attachments/940834033825349653/1214179928866693140/output-onlinepngtools.png?ex=65f82c2d&is=65e5b72d&hm=f08782ef90e1558f88cc61796b6c6129bc7bf564a4e150d97890b4962f0906d2&" alt="" />
            </div>
         </div>
      </>
   );
}
