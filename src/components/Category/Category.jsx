 


import { useNavigate } from "react-router-dom";

const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'fashion'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'mobile'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'laptop'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'shoes'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'home'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'books'
    }
];

const Category = () => {
    const navigate = useNavigate();

    return (
        <div className="py-12">
            {/* Title or description above categories */}
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-2 transform transition-all duration-300 hover:text-pink-600">Explore Our Categories</h2>
                <p className="text-lg text-gray-600 mt-2 max-w-md mx-auto">
                    Discover a wide range of products across various categories. Whether it's fashion, tech, or books, find what you need.
                </p>
            </div>

            <div className="flex flex-col mt-5">
                {/* Main container with horizontal scroll */}
                <div className="flex overflow-x-auto lg:justify-center hide-scroll-bar space-x-8 py-4">
                    {/* Category items */}
                    {category.map((item, index) => {
                        return (
                            <div key={index} className="flex-shrink-0">
                                {/* Category item with enhanced animation */}
                                <div
                                    onClick={() => navigate(`/category/${item.name}`)}
                                    className="relative group w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 cursor-pointer transition-all duration-500 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
                                >
                                    {/* Image inside the circle with floating effect */}
                                    <div className="flex justify-center items-center w-full h-full transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-6">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-14 h-14 object-contain transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Hover effect with floating label */}
                                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-opacity-80 bg-black text-white text-xs text-center rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Custom scroll bar styling */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    .hide-scroll-bar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    .hide-scroll-bar::-webkit-scrollbar {
                        display: none;
                    }
                `
            }} />
        </div>
    );
};

export default Category;
