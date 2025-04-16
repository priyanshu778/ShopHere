import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/MyContext";
import toast from "react-hot-toast";
import { fireDB } from "../../Firebase/Firebase";
import { useNavigate } from "react-router";
import Loader from "../../components/Loader/Loader";

// Import Icons from Lucide
import { Edit, DollarSign, Image, Tag, FileText } from 'lucide-react';

// Static category list, can be dynamic if fetched from the database
const categoryList = [
    { name: 'fashion' },
    { name: 'shirt' },
    { name: 'jacket' },
    { name: 'mobile' },
    { name: 'laptop' },
    { name: 'shoes' },
    { name: 'home' },
    { name: 'books' }
];

const AddProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProductFunction } = context;
    const navigate = useNavigate();

    // Product state initialization
    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity: 1,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }),
    });

    // Add Product Function
    const addProductFunction = async () => {
        if (!product.title || !product.price || !product.productImageUrl || !product.category || !product.description) {
            return toast.error("All fields are required.");
        }

        if (isNaN(product.price) || product.price <= 0) {
            return toast.error("Please enter a valid price.");
        }

        if (!product.productImageUrl.startsWith('http') && !product.productImageUrl.startsWith('https')) {
            return toast.error("Please enter a valid image URL.");
        }

        setLoading(true);

        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, product);
            toast.success("Product added successfully.");
            await getAllProductFunction();
            navigate("/");
        } catch (error) {
            console.error(error);
            toast.error("Failed to add product.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            {loading && <Loader />}

            {/* Add Product Form */}
            <div className="login_Form bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-6 border border-pink-300 rounded-xl shadow-md w-full max-w-lg">
                <h2 className="text-center text-3xl font-extrabold text-white mb-5">
                    Add Product
                </h2>

                {/* Input Fields */}
                <div className="mb-3 flex items-center space-x-3">
                    <Edit className="text-indigo-300" size={20} />
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={(e) => setProduct({ ...product, title: e.target.value })}
                        placeholder="Product Title"
                        className="bg-white border border-indigo-300 px-2 py-2 w-full rounded-md outline-none placeholder-gray-500 text-gray-800"
                    />
                </div>

                <div className="mb-3 flex items-center space-x-3">
                    <DollarSign className="text-green-500" size={20} />
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        placeholder="Product Price"
                        className="bg-white border border-indigo-300 px-2 py-2 w-full rounded-md outline-none placeholder-gray-500 text-gray-800"
                    />
                </div>

                <div className="mb-3 flex items-center space-x-3">
                    <Image className="text-purple-500" size={20} />
                    <input
                        type="text"
                        name="productImageUrl"
                        value={product.productImageUrl}
                        onChange={(e) => setProduct({ ...product, productImageUrl: e.target.value })}
                        placeholder="Product Image URL"
                        className="bg-white border border-indigo-300 px-2 py-2 w-full rounded-md outline-none placeholder-gray-500 text-gray-800"
                    />
                </div>

                <div className="mb-3 flex items-center space-x-3">
                    <Tag className="text-blue-500" size={20} />
                    <select
                        value={product.category}
                        onChange={(e) => setProduct({ ...product, category: e.target.value })}
                        className="w-full px-2 py-2 text-indigo-500 bg-white border border-indigo-300 rounded-md outline-none"
                    >
                        <option disabled>Select Product Category</option>
                        {categoryList.map((category, index) => (
                            <option key={index} value={category.name}>
                                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3 flex items-center space-x-3">
                    <FileText className="text-teal-500" size={20} />
                    <textarea
                        value={product.description}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        name="description"
                        placeholder="Product Description"
                        rows="5"
                        className="w-full px-2 py-1 text-gray-800 bg-white border border-indigo-300 rounded-md outline-none placeholder-gray-500"
                    />
                </div>

                {/* Add Product Button */}
                <div className="mb-3">
                    <button
                        onClick={addProductFunction}
                        type="button"
                        className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-l w-full text-white text-center py-2 font-bold rounded-md transition duration-300"
                    >
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;
