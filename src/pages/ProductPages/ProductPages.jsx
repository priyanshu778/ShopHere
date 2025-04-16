import { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import myContext from "../../context/MyContext";
import { useParams } from "react-router";
import { fireDB } from "../../Firebase/Firebase";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/CartSlice";
import toast from "react-hot-toast";

const ProductInfo = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const [product, setProduct] = useState('');
  const { id } = useParams();

  // Fetch product data
  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      setProduct({ ...productTemp.data(), id: productTemp.id });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

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

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <Layout>
      <section className="py-10 lg:py-16 font-poppins dark:bg-gray-900">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="max-w-6xl px-4 mx-auto">
            <div className="flex flex-wrap gap-8">
              {/* Product Image */}
              <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg">
                <img
                  className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-105"
                  src={product?.productImageUrl}
                  alt={product?.title}
                />
              </div>

              {/* Product Details */}
              <div className="w-full md:w-1/2">
                <div className="flex flex-col justify-between h-full p-6">
                  {/* Product Title & Rating */}
                  <div className="mb-4">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-2">{product?.title}</h2>
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill w-5 h-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.396.392-.928.356-1.294-.072l-3.928-4.696-5.557.34c-.437.026-.773-.324-.757-.754.01-.046.047-.099.092-.149l4.08-3.308-1.122-5.907c-.086-.45.26-.899.716-.912l5.942-.076 3.53-4.565c.322-.417.854-.417 1.176 0l3.53 4.565 5.942.076c.456.013.802.462.716.912l-1.122 5.907 4.08 3.308c.045.05.082.103.092.149.016.43-.32.78-.757.754l-5.557-.34-3.928 4.696c-.366.428-.898.464-1.294.072l-4.313-3.556z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-3xl font-semibold text-pink-600 mb-6">₹ {product?.price}</div>

                  {/* Product Description */}
                  <div className="text-gray-600 dark:text-gray-300 mb-6">
                    <h3 className="font-medium text-lg mb-2">Description:</h3>
                    <p>{product?.description}</p>
                  </div>

                  {/* Add to Cart & Remove from Cart Button */}
                  <div className="flex gap-4">
                    {cartItems.some((p) => p.id === product.id) ? (
                      <button
                        onClick={() => deleteCart(product)}
                        className="w-full px-6 py-3 text-center bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
                      >
                        Remove from Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => addCart(product)}
                        className="w-full px-6 py-3 text-center bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition-all"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>

                  {/* Buy Now Button */}
                  <div className="mt-4">
                    <button
                      className="w-full px-6 py-3 text-center bg-pink-800 text-white rounded-lg shadow-md hover:bg-pink-900 transition-all"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ProductInfo;
