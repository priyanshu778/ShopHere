
import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/MyContext";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../Firebase/Firebase";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion"; // For smooth animations
import { FaPlusCircle, FaEdit, FaTrash } from "react-icons/fa"; // Import icons

const ProductDetail = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProduct, getAllProductFunction } = context;
    const navigate = useNavigate();

    const deleteProduct = async (id) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, 'products', id));
            toast.success('Product Deleted successfully');
            getAllProductFunction();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="py-5 flex justify-between items-center">
                {/* text */}
                <h1 className="text-xl text-pink-300 font-bold">All Products</h1>
                {/* Add Product Button */}
                <Link to={'/addproduct'}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-5 py-2 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center space-x-2"
                    >
                        <FaPlusCircle size={20} />
                        <span>Add Product</span>
                    </motion.button>
                </Link>
            </div>

            {/* Loading */}
            <div className="flex justify-center relative top-20">
                {loading && <Loader />}
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto mb-5">
                <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
                    <thead>
                        <tr>
                            <th className="h-12 px-6 text-md font-bold text-slate-700 bg-slate-100">S.No.</th>
                            <th className="h-12 px-6 text-md font-bold text-slate-700 bg-slate-100">Image</th>
                            <th className="h-12 px-6 text-md font-bold text-slate-700 bg-slate-100">Title</th>
                            <th className="h-12 px-6 text-md font-bold text-slate-700 bg-slate-100">Price</th>
                            <th className="h-12 px-6 text-md font-bold text-slate-700 bg-slate-100">Category</th>
                            <th className="h-12 px-6 text-md font-bold text-slate-700 bg-slate-100">Date</th>
                            <th className="h-12 px-6 text-md font-bold text-slate-700 bg-slate-100">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllProduct.map((item, index) => {
                            const { id, title, price, category, date, productImageUrl } = item;
                            return (
                                <motion.tr
                                    key={index}
                                    className="text-pink-300 hover:bg-pink-50 transition duration-300 ease-in-out"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <td className="h-12 px-6 text-md border-t border-l text-slate-500">{index + 1}</td>
                                    <td className="h-12 px-6 text-md border-t border-l text-slate-500">
                                        <div className="flex justify-center">
                                            <img className="w-20" src={productImageUrl} alt={title} />
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-md border-t border-l text-slate-500">{title}</td>
                                    <td className="h-12 px-6 text-md border-t border-l text-slate-500">₹{price}</td>
                                    <td className="h-12 px-6 text-md border-t border-l text-slate-500">{category}</td>
                                    <td className="h-12 px-6 text-md border-t border-l text-slate-500">{date}</td>
                                    <td className="h-12 px-6 text-md border-t border-l text-slate-500 flex space-x-3">
                                        {/* Edit Button with Icon */}
                                        <motion.div
                                            onClick={() => navigate(`/UpdateProductPage/${id}`)}
                                            className="text-green-500 cursor-pointer flex items-center space-x-2 hover:text-green-600"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <FaEdit size={18} />
                                            <span>Edit</span>
                                        </motion.div>
                                        {/* Delete Button with Icon */}
                                        <motion.div
                                            onClick={() => deleteProduct(id)}
                                            className="text-red-500 cursor-pointer flex items-center space-x-2 hover:text-red-600"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <FaTrash size={18} />
                                            <span>Delete</span>
                                        </motion.div>
                                    </td>
                                </motion.tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductDetail;
