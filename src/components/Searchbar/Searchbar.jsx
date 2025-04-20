import { useContext, useState } from "react";
import myContext from "../../context/MyContext";
import { useNavigate } from "react-router";

const Searchbar = () => {
    const context = useContext(myContext);
    const { getAllProduct } = context;
    // Search State
    const [search, setSearch] = useState("");

    // Filter Search Data
    const filterSearchData = getAllProduct.filter((obj) => obj.title.toLowerCase().includes(search)).slice(0, 8);

    const navigate = useNavigate();

    return (
        <div className="relative">
            {/* search input */}
            <div className="input flex justify-center mb-2">
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 placeholder-white rounded-lg px-4 py-2 w-96 lg:w-96 md:w-96 outline-none text-white shadow-md transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-indigo-300"
                />
            </div>

            {/* search drop-down */}
            <div className="flex justify-center">
                {search && (
                    <div className="block absolute bg-white w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2 shadow-lg transition-all transform opacity-100">
                        {filterSearchData.length > 0 ? (
                            <>
                                {filterSearchData.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="py-2 px-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-all duration-200"
                                            onClick={() => navigate(`/productpages/${item.id}`)}
                                        >
                                            <div className="flex items-center gap-2">
                                                <img className="w-10" src={item.productImageUrl} alt="" />
                                                <span className="text-black">{item.title}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                <div className="flex justify-center">
                                    <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Searchbar;
