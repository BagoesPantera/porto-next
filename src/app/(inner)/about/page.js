export default function About() {
    return (
        <>
            <h1 className={'text-4xl text-gray-800'}>About</h1>
            <div className="pl-4 border-s-4 border-gray-300 h-fit py-5 flex flex-col w-[75%] text-gray-600">
                <p>Hi, I'm Pantera, a backend developer from Bali, Indonesia. While currently an informatics student at Primakara University, my passion for coding stems from the constant challenge of learning new things. While I primarily work with JavaScript and PHP, I'm always open to exploring new programming languages for potential collaborations.</p>
                <a href="https://drive.google.com/file/d/1s4zxtKG1X3z6OXUq6R2ECKmMfMjVb4I3/view?usp=sharing" target="_blank" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-xs font-medium rounded-lg px-5 py-2.5 mt-3 w-fit">Download my CV</a>
            </div>
        </>
    );
}