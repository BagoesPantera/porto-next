export default function About() {
    return (
        <>
            <h1 className={'text-4xl text-gray-800'}>About</h1>
            <div className="pl-4 border-s-4 border-gray-300 h-fit py-5 flex flex-col w-[75%] text-gray-600">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae alias ea aliquid accusantium iste dolores quibusdam ipsa mollitia in! Recusandae aut inventore ab eius beatae quibusdam velit rem libero modi.</p>
                <a href="" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 mt-3 w-fit">Download my CV</a>
            </div>
        </>
    );
}