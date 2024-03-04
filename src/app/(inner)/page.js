'use client'
import TypeIt from "typeit-react";
import Image from "next/image";

export default function Home() {
   return (
      <>
         <div className="mb-4 pl-5 items-center lg:h-[90vh] flex flex-col-reverse lg:flex-row">
            <div className="flex flex-col gap-1 items-start justify-start rounded bg-gray-50 h-50 space-y-4 lg:w-[75%]">
               {/*<TypeIt*/}
               {/*   className="text-3xl font-bold"*/}
               {/*   options={{*/}
               {/*      speed: 200,*/}
               {/*      loop: true*/}
               {/*   }}*/}
               {/*   getBeforeInit={(instance) => {*/}
               {/*      instance.type("Hai", { delay: 1000 })*/}
               {/*         .delete()*/}
               {/*         .type("Hello", { delay: 1000 })*/}
               {/*         .delete()*/}
               {/*         .type("こんにちは", { delay: 1000 })*/}
               {/*         .delete()*/}
               {/*         .type("안녕하세요", { delay: 1000 })*/}

               {/*      return instance*/}
               {/*   }} />*/}
                <span className={'text-xl text-gray-500'}>Hello! I am</span>
               <span className="text-7xl font-bold">
                 Bagoes Pantera
               </span>
               <span>a Backend Developer</span>

            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-[40vh] w-[25%]">
               <img src="https://cdn.discordapp.com/attachments/940834033825349653/1214179928866693140/output-onlinepngtools.png?ex=65f82c2d&is=65e5b72d&hm=f08782ef90e1558f88cc61796b6c6129bc7bf564a4e150d97890b4962f0906d2&" alt=""  />
            </div>
         </div>
      </>
   );
}
