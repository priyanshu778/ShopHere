import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const UserDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users')); // Fetch user data from localStorage
    const { loading, getAllOrder } = useContext(myContext);

    const [userOrders, setUserOrders] = useState([]);

    // Fetch and filter orders when user data changes
    useEffect(() => {
        if (user?.uid && getAllOrder.length > 0) {
            const orders = getAllOrder.filter(order => order.userid === user.uid);
            setUserOrders(orders); // Store filtered orders in state
        }
    }, [user?.uid, getAllOrder]); // Dependency on user UID and all orders

    const { name, email, date, role, uid } = user || {}; // Destructure user object for clarity

    return (
        <Layout>
            <div className="container mx-auto px-4 py-5 lg:py-8">
                {/* Top Section: User Information */}
                <div className="top">
                    <div className="bg-pink-50 py-5 rounded-xl border border-pink-100">
                        {/* User Image */}
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="User Icon" />
                        </div>

                        {/* User Details */}
                        <div className="text-center">
                            <h1 className="text-lg">
                                <span className="font-bold">Name: </span>{name}
                            </h1>
                            <h1 className="text-lg">
                                <span className="font-bold">Email: </span>{email}
                            </h1>
                            <h1 className="text-lg">
                                <span className="font-bold">Date: </span>{date}
                            </h1>
                            <h1 className="text-lg">
                                <span className="font-bold">Role: </span>{role}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Order Details */}
                <div className="bottom">
                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                        <h2 className="text-2xl lg:text-3xl font-bold">Order Details</h2>

                        {/* Loading state for orders */}
                        <div className="flex justify-center relative top-10">
                            {loading && <Loader />}
                        </div>

                        {/* Display Orders */}
                        {userOrders.length > 0 ? (
                            userOrders.map((order, index) => (
                                <div key={index} className="mt-5">
                                    {order.cartItems.map((item, idx) => {
                                        const { id, date, quantity, price, title, productImageUrl, category } = item;
                                        const { status } = order;
                                        return (
                                            <div key={idx} className="flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row">
                                                <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
                                                    <div className="p-8">
                                                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold text-black">Order Id</div>
                                                                <div className="text-sm font-medium text-gray-900">#{id}</div>
                                                            </div>
                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold">Date</div>
                                                                <div className="text-sm font-medium text-gray-900">{date}</div>
                                                            </div>
                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold">Total Amount</div>
                                                                <div className="text-sm font-medium text-gray-900">₹ {price * quantity}</div>
                                                            </div>
                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold">Order Status</div>
                                                                <div className="text-sm font-medium text-green-800 first-letter:uppercase">{status}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Order Details */}
                                                <div className="flex-1">
                                                    <div className="p-8">
                                                        <ul className="-my-7 divide-y divide-gray-200">
                                                            <li className="flex flex-col justify-between space-x-5 py-7 md:flex-row">
                                                                <div className="flex flex-1 items-stretch">
                                                                    <div className="flex-shrink-0">
                                                                        <img className="h-40 w-40 rounded-lg border border-gray-200 object-contain" src={productImageUrl} alt="Product" />
                                                                    </div>
                                                                    <div className="ml-5 flex flex-col justify-between">
                                                                        <div className="flex-1">
                                                                            <p className="text-sm font-bold text-gray-900">{title}</p>
                                                                            <p className="mt-1.5 text-sm font-medium text-gray-500">{category}</p>
                                                                        </div>
                                                                        <p className="mt-4 text-sm font-medium text-gray-500">x {quantity}</p>
                                                                    </div>
                                                                </div>

                                                                <div className="ml-auto flex flex-col items-end justify-between">
                                                                    <p className="text-right text-sm font-bold text-gray-900">₹ {price}</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-lg text-gray-600">No orders found</p>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default UserDashboard;
