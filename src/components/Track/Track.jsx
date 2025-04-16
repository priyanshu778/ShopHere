
const Track = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
            <div className="container mx-auto px-5 py-10 md:py-14">
                {/* main  */}
                <div className="flex flex-wrap -m-4 text-center">
                    {/* Track 1 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-2xl hover:shadow-pink-300 border-gray-200 bg-gradient-to-b from-gray-100 to-gray-200 hover:scale-105 transform transition-all ease-in-out duration-300 px-4 py-6 rounded-lg">
                            <svg className="text-pink-600 w-16 h-16 mb-3 inline-block transition-transform transform hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <h2 className="title-font font-medium text-xl text-gray-900 mb-2">Premium T-shirts</h2>
                            <p className="leading-relaxed text-lg text-gray-700">Our T-Shirts are 100% made of cotton, ensuring comfort and durability.</p>
                        </div>
                    </div>

                    {/* Track 2 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-2xl hover:shadow-pink-300 border-gray-200 bg-gradient-to-b from-gray-100 to-gray-200 hover:scale-105 transform transition-all ease-in-out duration-300 px-4 py-6 rounded-lg">
                            <svg className="text-purple-600 w-16 h-16 mb-3 inline-block transition-transform transform hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <h2 className="title-font font-medium text-xl text-gray-900 mb-2">Premium Hoodies</h2>
                            <p className="leading-relaxed text-lg text-gray-700">Our Hoodies are made from the finest fabric, perfect for any season.</p>
                        </div>
                    </div>

                    {/* Track 3 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-2xl hover:shadow-pink-300 border-gray-200 bg-gradient-to-b from-gray-100 to-gray-200 hover:scale-105 transform transition-all ease-in-out duration-300 px-4 py-6 rounded-lg">
                            <svg className="text-indigo-600 w-16 h-16 mb-3 inline-block transition-transform transform hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <h2 className="title-font font-medium text-xl text-gray-900 mb-2">Premium Caps</h2>
                            <p className="leading-relaxed text-lg text-gray-700">Our Caps are designed for ultimate comfort and style.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Track;
