import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Dashboard/DashboardHome/Navbar";
import { FaHome, FaList } from "react-icons/fa";
 





const Dashboard = () => {
    

    const navOptions = <></>
    return (
        <div>
            <Navbar></Navbar>

            <div className="">
                <div>

                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navOptions}
                            </ul>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>


                </div>
                <div className="flex">
                    <div className="w-64 min-h bg-blue-600">
                        <ul className="menu gap-2">

                            <li>
                                <NavLink to="/dashboard">
                                    <FaHome></FaHome>
                                    User Home</NavLink>
                            </li>


                            <li>
                                <NavLink to="/dashboard/addTask">
                                    <FaList></FaList>
                                    Add Task</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/taskList">
                                    <FaList></FaList>
                                    See All Task</NavLink>
                            </li>

                        </ul>
                    </div>


                    <div className="">
                        <Outlet></Outlet>
                    </div>
                  


                </div>

            </div>
        </div>
    );
};

export default Dashboard;