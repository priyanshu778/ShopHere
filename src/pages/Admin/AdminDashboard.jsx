import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductDetail from '../../components/Admin/ProductDetails';
import OrderDetail from '../../components/Admin/OrderDetails';
import UserDetail from '../../components/Admin/UserDetails';
import { useContext } from 'react';
import myContext from '../../context/MyContext';
import { FaShoppingBasket, FaListAlt, FaUsers, FaCogs, FaUserCog } from 'react-icons/fa'; // React-icons for more expressive visuals
import { motion } from 'framer-motion'; // For animations

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const context = useContext(myContext);
    const { getAllProduct, getAllOrder, getAllUser } = context;

    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200">
            {/* Top */}
            <div className="top mb-8 px-5 mt-8">
                <div className="bg-pink-600 py-6 border border-pink-200 rounded-lg shadow-xl">
                    <h1 className="text-center text-4xl font-bold text-white">Admin Dashboard</h1>
                </div>
            </div>

            {/* Mid */}
            <div className="px-5">
                <div className="bg-white py-6 mb-8 rounded-xl border border-pink-200 shadow-lg">
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                            alt="Admin Icon"
                            className="w-24 h-24 rounded-full shadow-md border-4 border-pink-400"
                        />
                    </div>
                    <div className="text-center">
                        <h1 className="text-lg font-semibold text-gray-700">
                            <span className="font-bold">Name: </span>{user?.name}
                        </h1>
                        <h1 className="text-lg font-semibold text-gray-700">
                            <span className="font-bold">Email: </span>{user?.email}
                        </h1>
                        <h1 className="text-lg font-semibold text-gray-700">
                            <span className="font-bold">Date: </span>{user?.date}
                        </h1>
                        <h1 className="text-lg font-semibold text-gray-700">
                            <span className="font-bold">Role: </span>{user?.role}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="px-5">
                <Tabs>
                    <TabList className="flex flex-wrap justify-center gap-6 mb-8">
                        {/* Total Products */}
                        <Tab className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 cursor-pointer">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-r from-pink-400 to-pink-600 text-white hover:shadow-xl hover:scale-105 border border-pink-300 rounded-xl shadow-md p-5 text-center transition duration-300 ease-in-out"
                            >
                                <FaShoppingBasket className="mb-3 text-5xl" />
                                <h2 className="text-3xl font-semibold">{getAllProduct.length}</h2>
                                <p className="font-bold">Total Products</p>
                            </motion.div>
                        </Tab>

                        {/* Total Orders */}
                        <Tab className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 cursor-pointer">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:shadow-xl hover:scale-105 border border-purple-300 rounded-xl shadow-md p-5 text-center transition duration-300 ease-in-out"
                            >
                                <FaListAlt className="mb-3 text-5xl" />
                                <h2 className="text-3xl font-semibold">{getAllOrder.length}</h2>
                                <p className="font-bold">Total Orders</p>
                            </motion.div>
                        </Tab>

                        {/* Total Users */}
                        <Tab className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 cursor-pointer">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white hover:shadow-xl hover:scale-105 border border-indigo-300 rounded-xl shadow-md p-5 text-center transition duration-300 ease-in-out"
                            >
                                <FaUsers className="mb-3 text-5xl" />
                                <h2 className="text-3xl font-semibold">{getAllUser.length}</h2>
                                <p className="font-bold">Total Users</p>
                            </motion.div>
                        </Tab>
                    </TabList>

                    {/* Tab Panels */}
                    <TabPanel>
                        <ProductDetail />
                    </TabPanel>

                    <TabPanel>
                        <OrderDetail />
                    </TabPanel>

                    <TabPanel>
                        <UserDetail />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default AdminDashboard;
