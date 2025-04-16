import { useContext } from "react";
import myContext from "../../context/myContext";
import { FaTrash } from "react-icons/fa"; // Add icon for delete button

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, deleteProduct } = context;

    return (
        <div>
            <div className="py-5">
                {/* Header */}
                <h1 className="text-xl text-pink-300 font-bold">All Orders</h1>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
                    <thead>
                        <tr>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">S.No.</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Order Id</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Image</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Title</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Category</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Price</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Quantity</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Total Price</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Status</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Name</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Address</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Pincode</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Phone Number</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Email</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Date</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 text-slate-700 bg-slate-100">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllOrder.map((order, orderIndex) => {
                            return (
                                <>
                                    {order.cartItems.map((item, index) => {
                                        const { id, productImageUrl, title, category, price, quantity } = item;
                                        return (
                                            <tr key={index} className="text-pink-300 hover:bg-pink-50 transition duration-300 ease-in-out">
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">{orderIndex + 1}</td>
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">{id}</td>
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">
                                                    <img className="w-20" src={productImageUrl} alt="Product" />
                                                </td>
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">{title}</td>
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">{category}</td>
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">₹{price}</td>
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">{quantity}</td>
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">₹{price * quantity}</td>
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">{order.status}</td>
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">{order.addressInfo.name}</td>
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">{order.addressInfo.address}</td>
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">{order.addressInfo.pincode}</td>
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">{order.addressInfo.mobileNumber}</td>
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">{order.email}</td>
                                                <td className="h-12 px-6 text-md border-t border-l text-slate-500">{order.date}</td>
                                                <td
                                                    onClick={() => deleteProduct(order.id)}
                                                    className="h-12 px-6 text-md border-t border-l text-red-500 cursor-pointer flex items-center space-x-2 hover:text-red-600"
                                                >
                                                    <FaTrash size={18} />
                                                    <span>Delete</span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDetail;
