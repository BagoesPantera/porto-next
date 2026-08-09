export default function About() {
    return (
        <>
            <h1 className={'text-4xl text-gray-800'}>About</h1>
            <div className="pl-4 border-s-4 border-gray-300 h-fit py-5 flex flex-col w-[75%] text-gray-600">
                <p>Full-Stack Laravel Developer with experience in developing and maintaining web-based information systems using Laravel, PHP, and web technologies. Experienced in building end-to-end applications, including backend services, database design, business workflows, and user-facing interfaces. Top 100 finalist in the Google Solution Challenge 2024, with certifications in Software Development (BNSP) and Network & System Security (FCNS). Strong focus on building maintainable software, continuously improving technical skills, and delivering reliable solutions.</p>
                <a href={process.env.CV_URL || 'https://drive.google.com/file/d/1s4zxtKG1X3z6OXUq6R2ECKmMfMjVb4I3/view?usp=sharing'} target="_blank" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-xs font-medium rounded-lg px-5 py-2.5 mt-3 w-fit">Download my CV</a>
            </div>
        </>
    );
}