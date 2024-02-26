export default function Home() {
   const lineNum = []
   for (let index = 1; index < 27; index++) {
      lineNum.push(<><span>{index}</span> <br /></>)
      
   }
  return (
    
<>      
      <div class=" pl-3 sm:ml-64 bg-gray-50 overflow-hidden">
      <a href="#" class="flex items-center font-light text-slate-400 w-fit dark:text-white hover:text-slate-600 group">
         <span class="">
            <svg  class="flex-shrink-0 w-5 h-5 text-gray-100 transition duration-75 dark:text-gray-400  dark:group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M8.12695 21C8.571 19.2748 10.1371 18 12.0009 18C13.8648 18 15.4309 19.2748 15.8749 21M13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
         </span>
         <span class="ms-1 ">Home</span>
      </a>
         <div className="absolute p-0 font-light text-slate-400 text-right select-none">
            {lineNum}
         </div>
   <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 overflow-hidden h-screen">
      {/* <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
      </div> */}
      <div class="grid grid-cols-2 gap-4 mb-4 h-screen pl-5  items-center">
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-grey-800">
            <span class=" text-base text-gray-400 dark:text-gray-500">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error fugit ipsum, minus itaque ratione nulla sunt esse laudantium cum veritatis suscipit, eveniet, recusandae dolore doloremque. Maiores alias dolores ratione et!
            </span>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
   </div>
</div></>
      
  );
}
