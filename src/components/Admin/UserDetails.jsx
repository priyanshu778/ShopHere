
import { useContext } from "react";
import myContext from "../../context/MyContext";
import { FaTrash, FaEdit } from "react-icons/fa"; // Import icons for actions (edit and delete)

const UserDetails = () => {
    const context = useContext(myContext);
    const { getAllUser } = context;

    return (
        <div>
            <div className="py-5 flex justify-between items-center">
                {/* Heading */}
                <h1 className="text-xl text-pink-300 font-bold">All Users</h1>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
                    <thead>
                        <tr>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">S.No.</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 text-slate-700 bg-slate-100 font-bold">Name</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 text-slate-700 bg-slate-100 font-bold">Email</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 text-slate-700 bg-slate-100 font-bold">Uid</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 text-slate-700 bg-slate-100 font-bold">Role</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 text-slate-700 bg-slate-100 font-bold">Date</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 text-slate-700 bg-slate-100 font-bold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllUser.map((value, index) => {
                            return (
                                <tr key={index} className="text-pink-300 hover:bg-pink-50 transition duration-300 ease-in-out">
                                    <td className="h-12 px-6 text-md border-t border-l text-slate-500">{index + 1}</td>
                                    <td className="h-12 px-6 text-md border-t border-l text-slate-500">{value.name}</td>
                                    <td className="h-12 px-6 text-md border-t border-l text-slate-500 cursor-pointer">{value.email}</td>
                                    <td className="h-12 px-6 text-md border-t border-l text-slate-500 cursor-pointer">{value.uid}</td>
                                    <td className="h-12 px-6 text-md border-t border-l text-slate-500 cursor-pointer">{value.role}</td>
                                    <td className="h-12 px-6 text-md border-t border-l text-slate-500 cursor-pointer">{value.date}</td>
                                    <td className="h-12 px-6 text-md border-t border-l text-slate-500">
                                        <div className="flex space-x-3">
                                            {/* Edit Action */}
                                            <FaEdit 
                                                size={18} 
                                                className="text-blue-500 cursor-pointer hover:text-blue-600" 
                                                onClick={() => console.log("Edit User", value.uid)} 
                                            />
                                            {/* Delete Action */}
                                            <FaTrash 
                                                size={18} 
                                                className="text-red-500 cursor-pointer hover:text-red-600" 
                                                onClick={() => console.log("Delete User", value.uid)} 
                                            />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserDetails;
