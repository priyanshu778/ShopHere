
import { useNavigate, useParams } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../Firebase/Firebase";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

// Importing icons from Lucide
import { Edit, DollarSign, Image, Tag, FileText } from 'lucide-react';

// Static category list
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

const UpdateProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProductFunction } = context;
    const navigate = useNavigate();
    const { id } = useParams();

    // Product state
    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        })
    });

    // Fetch the product data
    const getSingleProductFunction = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id));
            const product = productTemp.data();
            setProduct({
                title: product?.title,
                price: product?.price,
                productImageUrl: product?.productImageUrl,
                category: product?.category,
                description: product?.description,
                time: product?.time,
                date: product?.date
            });
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error("Failed to fetch product details");
            console.log(error);
        }
    };

    // Update Product Function
    const updateProduct = async () => {
        setLoading(true);
        try {
            await setDoc(doc(fireDB, 'products', id), product);
            toast.success("Product Updated successfully");
            await getAllProductFunction();
            navigate('/admin-dashboard');
        } catch (error) {
            setLoading(false);
            toast.error("Failed to update product");
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleProductFunction();
    }, []);

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                {loading && <Loader />}
                {/* Update Product Form */}
                <div className="login_Form bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-6 border border-pink-300 rounded-xl shadow-md w-full max-w-lg">
                    <h2 className="text-center text-3xl font-extrabold text-white mb-5">
                        Update Product
                    </h2>

                    {/* Product Title */}
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

                    {/* Product Price */}
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

                    {/* Product Image URL */}
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

                    {/* Product Category */}
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

                    {/* Product Description */}
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

                    {/* Update Button */}
                    <div className="mb-3">
                        <button
                            onClick={updateProduct}
                            type="button"
                            className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-l w-full text-white text-center py-2 font-bold rounded-md transition duration-300"
                        >
                            Update Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProductPage;
