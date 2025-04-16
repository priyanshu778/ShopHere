import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../Searchbar/Searchbar";
import { useSelector } from "react-redux";

const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-8 text-white font-medium text-lg">
            {/* Home */}
            <li className="transition-all hover:text-indigo-400 hover:scale-105 transform">
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li className="transition-all hover:text-indigo-400 hover:scale-105 transform">
                <Link to={'/allproduct'}>All Products</Link>
            </li>

            {/* Signup */}
            {!user ? <li className="transition-all hover:text-indigo-400 hover:scale-105 transform">
                <Link to={'/signup'}>Signup</Link>
            </li> : ""}

            {/* Login */}
            {!user ? <li className="transition-all hover:text-indigo-400 hover:scale-105 transform">
                <Link to={'/login'}>Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li className="transition-all hover:text-indigo-400 hover:scale-105 transform">
                <Link to={'/userDashboard'}>User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li className="transition-all hover:text-indigo-400 hover:scale-105 transform">
                <Link to={'/adminDashboard'}>Admin</Link>
            </li>}

            {/* logout */}
            {user && <li className="cursor-pointer transition-all hover:text-indigo-400 hover:scale-105 transform" onClick={logout}>
                Logout
            </li>}

            {/* Cart */}
            <li className="transition-all hover:text-indigo-400 hover:scale-105 transform">
                <Link to={'/cartpage'}>
                    Cart ({cartItems.length})
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 shadow-lg sticky top-0 z-10">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-5 px-6">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className="font-bold text-white text-3xl text-center hover:text-indigo-100 transition-all">ShopHere</h2>
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <div className="search-bar-container hidden lg:flex items-center justify-center space-x-4">
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
