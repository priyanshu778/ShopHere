import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/CartSlice";
import { FaCartPlus, FaTrashAlt } from "react-icons/fa"; // React-icons for Add and Delete

const AllProduct = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Removed from cart");
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <Layout>
            <div className="py-8">
                {/* Heading */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-semibold text-purple-700">All Products</h1>
                </div>

                {/* Main */}
                <section className="text-gray-600 body-font">
                    <div className="container px-5 lg:px-0 py-5 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {getAllProduct.map((item, index) => {
                                const { id, title, price, productImageUrl } = item;
                                return (
                                    <div key={index} className="p-4 w-full md:w-1/4">
                                        <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
                                            <img
                                                onClick={() => navigate(`/productpages/${id}`)}
                                                className="lg:h-80 h-96 w-full object-cover"
                                                src={productImageUrl}
                                                alt="product"
                                            />
                                            <div className="p-6 bg-white">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                    ShopHere
                                                </h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    {title.substring(0, 25)}
                                                </h1>
                                                <h1 className="title-font text-xl font-semibold text-gray-900 mb-3">
                                                    ₹{price}
                                                </h1>

                                                <div className="flex justify-center gap-4 mt-4">
                                                    {cartItems.some((p) => p.id === item.id) ? (
                                                        <button
                                                            onClick={() => deleteCart(item)}
                                                            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-bold transition duration-300 flex items-center gap-2"
                                                        >
                                                            <FaTrashAlt /> Remove from Cart
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() => addCart(item)}
                                                            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-bold transition duration-300 flex items-center gap-2"
                                                        >
                                                            <FaCartPlus /> Add to Cart
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default AllProduct;
