import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../Firebase/Firebase";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Login State 
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    // Error message state
    const [errorMessage, setErrorMessage] = useState("");

    /**========================================================================
     *                          User Login Function 
    *========================================================================**/
    const userLoginFunction = async () => {
        // validation 
        if (userLogin.email === "" || userLogin.password === "") {
            setErrorMessage("All fields are required.");
            return;
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
            
            try {
                const q = query(
                    collection(fireDB, "user"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user));
                    setUserLogin({
                        email: "",
                        password: ""
                    });
                    toast.success("Login Successful");
                    setLoading(false);
                    if(user.role === "user") {
                        navigate('/userDashboard');
                    } else {
                        navigate('/adminDashboard');
                    }
                });
                return () => data;
            } catch (error) {
                console.log(error);
                setLoading(false);
                setErrorMessage("Failed to fetch user data.");
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setErrorMessage("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-r from-pink-100 to-pink-300'>
            {loading && <Loader />}

            {/* Login Form */}
            <div className="bg-white p-8 border rounded-xl shadow-lg w-96 space-y-6">
                {/* Top Heading */}
                <h2 className="text-2xl font-bold text-center text-pink-600">Login</h2>

                {/* Error Message */}
                {errorMessage && <div className="text-red-500 text-sm text-center">{errorMessage}</div>}

                {/* Input One: Email */}
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-pink-600 font-semibold mb-2">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={userLogin.email}
                        onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
                        className="border border-pink-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
                    />
                </div>

                {/* Input Two: Password */}
                <div className="flex flex-col">
                    <label htmlFor="password" className="text-pink-600 font-semibold mb-2">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={userLogin.password}
                        onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
                        className="border border-pink-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
                    />
                </div>

                {/* Login Button */}
                <div>
                    <button
                        type="button"
                        onClick={userLoginFunction}
                        className="w-full bg-pink-500 text-white py-3 rounded-md font-semibold hover:bg-pink-600 transition duration-200"
                    >
                        Login
                    </button>
                </div>

                {/* Redirect to Signup */}
                <div className="text-center">
                    <h2 className="text-black text-sm">Don't have an account? 
                        <Link className="text-pink-600 font-semibold" to={'/signup'}> Sign Up</Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Login;
