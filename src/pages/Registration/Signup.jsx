import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    // Error message state
    const [errorMessage, setErrorMessage] = useState("");

    /**========================================================================
     *                          User Signup Function 
    *========================================================================**/
    const userSignupFunction = async () => {
        // validation 
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            setErrorMessage("All fields are required.");
            return;
        }
        
        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            // create user reference
            const userReference = collection(fireDB, "user");

            // Add User Detail
            await addDoc(userReference, user);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            });

            toast.success("Signup Successful!");
            setLoading(false);
            navigate('/login');
        } catch (error) {
            console.error(error);
            setLoading(false);
            setErrorMessage("Error occurred during signup. Please try again.");
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-r from-pink-100 to-pink-300'>
            {loading && <Loader />}
            
            {/* Signup Form */}
            <div className="bg-white p-8 border rounded-xl shadow-lg w-96 space-y-6">

                {/* Top Heading */}
                <h2 className="text-2xl font-bold text-center text-pink-600">Signup</h2>

                {/* Error Message */}
                {errorMessage && <div className="text-red-500 text-sm text-center">{errorMessage}</div>}

                {/* Input One: Name */}
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-pink-600 font-semibold mb-2">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={userSignup.name}
                        onChange={(e) => setUserSignup({ ...userSignup, name: e.target.value })}
                        className="border border-pink-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
                    />
                </div>

                {/* Input Two: Email */}
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-pink-600 font-semibold mb-2">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={userSignup.email}
                        onChange={(e) => setUserSignup({ ...userSignup, email: e.target.value })}
                        className="border border-pink-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
                    />
                </div>

                {/* Input Three: Password */}
                <div className="flex flex-col">
                    <label htmlFor="password" className="text-pink-600 font-semibold mb-2">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={userSignup.password}
                        onChange={(e) => setUserSignup({ ...userSignup, password: e.target.value })}
                        className="border border-pink-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
                    />
                </div>

                {/* Signup Button */}
                <div>
                    <button
                        type="button"
                        onClick={userSignupFunction}
                        className="w-full bg-pink-500 text-white py-3 rounded-md font-semibold hover:bg-pink-600 transition duration-200"
                    >
                        Signup
                    </button>
                </div>

                {/* Redirect to Login */}
                <div className="text-center">
                    <h2 className="text-black text-sm">Already have an account? 
                        <Link className="text-pink-600 font-semibold" to="/login"> Login</Link>
                    </h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;
