const Testmonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10 bg-gradient-to-r from-pink-300 to-purple-300 py-16">
                {/* main */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading */}
                    <h1 className="text-center text-4xl font-bold text-black mb-4 animate__animated animate__fadeInUp">
                        Testimonial
                    </h1>
                    {/* Subheading */}
                    <h2 className="text-center text-2xl font-semibold mb-10 animate__animated animate__fadeInUp animate__delay-1s">
                        What our <span className="text-pink-500">customers</span> are saying
                    </h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="h-full text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
                                />
                                <p className="leading-relaxed text-lg font-medium text-gray-700 mb-6">
                                    Amazing shopping experience! Wide selection, fast delivery, and excellent customer service. Always my go-to platform for all needs!
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Vaibhav Thakur</h2>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 animate__animated animate__fadeInUp animate__delay-3s">
                            <div className="h-full text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                                />
                                <p className="leading-relaxed text-lg font-medium text-gray-700 mb-6">
                                    Love this platform! Easy to navigate, reliable service, and quick shipping. Definitely recommend for hassle-free shopping experiences.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Prayash Kumar</h2>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4 animate__animated animate__fadeInUp animate__delay-4s">
                            <div className="h-full text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://images.pexels.com/photos/938642/pexels-photo-938642.jpeg?auto=compress&cs=tinysrgb&w=600"
                                />
                                <p className="leading-relaxed text-lg font-medium text-gray-700 mb-6">
                                    Shopping here is a breeze! Great products, seamless checkout, and fast delivery. A must-try for all online shoppers!
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Rishi Kumar</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testmonial;
