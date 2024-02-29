'use client'
import TypeIt from "typeit-react";

export default function Home() {
   return (
      <>
         <div className="grid sm:grid-cols-2 sml:gap-4 mb-4 h-screen pl-5  items-center">
            <div className="flex flex-col gap-1 items-start justify-start rounded bg-gray-50 h-50 space-y-4">
               <TypeIt 
               className="text-3xl font-bold"
               options={{
                  speed: 200,
                  loop: true
               }}
               getBeforeInit={(instance) => {
                  instance.type("Hai", { delay : 1000 })
                  .delete()
                  .type("Hello", { delay : 1000 })
                  .delete()
                  .type("こんにちは", { delay : 1000 })
                  .delete()
                  .type("안녕하세요", {delay : 1000})

                  return instance
               }}/>
               <span className="text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error fugit ipsum, minus itaque ratione nulla sunt esse laudantium cum veritatis suscipit, eveniet, recusandae dolore doloremque. Maiores alias dolores ratione et!
               </span>
               <a href="" className="mt-5 text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">Tes</a>
               
            </div>
            <div className="hidden items-center justify-center rounded bg-gray-50 h-28 sm:flex">
               <img src="https://cdn.discordapp.com/attachments/940834033825349653/1212578374648725504/dummy-image.png?ex=65f2589d&is=65dfe39d&hm=ff3c48f1b3b2b82e677e74483f5f4c049086ad5a5ae4f0f04a5303d3805f9626&" alt="" />
            </div>
         </div>
      </>
   );
}
