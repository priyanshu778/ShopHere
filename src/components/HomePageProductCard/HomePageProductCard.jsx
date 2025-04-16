import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/MyContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/CartSlice";
import { FaCartPlus, FaTrashAlt } from "react-icons/fa"; // Import icons

const HomePageProductCard = () => {
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
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="mt-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800">Bestselling Products</h1>
      </div>

      {/* Main */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {getAllProduct.slice(0, 8).map((item, index) => {
              const { id, title, price, productImageUrl } = item;
              return (
                <div key={index} className="p-4 w-full md:w-1/4 transition-all transform hover:scale-102 duration-300">
                  <div className="h-full min-h-[400px] border border-gray-300 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 hover:shadow-2xl hover:scale-102 cursor-pointer transition-all duration-300">
                    <img
                      onClick={() => navigate(`/productpages/${id}`)}
                      className="lg:h-96 h-80 w-full object-cover transition-transform transform hover:scale-110 duration-300 hover:brightness-90"
                      src={productImageUrl}
                      alt={title}
                    />
                    <div className="p-6 bg-white rounded-b-xl">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">ShopHere</h2>
                      <h1 className="title-font text-lg font-semibold text-gray-800 mb-3">{title.substring(0, 25)}</h1>
                      <h1 className="title-font text-xl font-bold text-pink-600 mb-3">₹{price}</h1>

                      {/* Add to Cart / Remove from Cart Button */}
                      <div className="flex justify-center space-x-3">
                        {cartItems.some((p) => p.id === item.id) ? (
                          <button
                            onClick={() => deleteCart(item)}
                            className="bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-6 rounded-full font-semibold flex items-center space-x-2 transition-all transform hover:scale-105 duration-300"
                          >
                            <FaTrashAlt className="text-white" />
                            <span>Remove from Cart</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => addCart(item)}
                            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-6 rounded-full font-semibold flex items-center space-x-2 transition-all transform hover:scale-105 duration-300"
                          >
                            <FaCartPlus className="text-white" />
                            <span>Add to Cart</span>
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
  );
};

export default HomePageProductCard;
