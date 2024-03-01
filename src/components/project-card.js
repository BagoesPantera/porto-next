import Image from "next/image"

export default function ProjectCard({ item, index }) {
    index = index ? index : 100
    return (
        <div className={`${item.tech ? 'max-w-sm' : 'w-full'} p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between`} key={index}>
            <div className="">
                <a href={item.link} target="_blank">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{item.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 line-clamp-2">{item.description}</p>
            </div>
            <div className="w-100 flex justify-between items-center">
                <a href={item.link} target="_blank" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                    Visit
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                </a>
                {
                    item.tech &&
                    <div className="flex">
                        {item.tech.map((icon) => (
                            <Image src={icon} className="ms-1 w-6 h-6" alt="icon" />
                        ))}
                    </div>
                }

            </div>
        </div>
    )
}