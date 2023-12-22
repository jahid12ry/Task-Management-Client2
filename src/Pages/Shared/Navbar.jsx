import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOptions = <>
        <li>  <Link to='/'><button className="btn btn-ghost">Home</button></Link></li>
        <li><Link to="/about"><button className="btn btn-ghost">About</button></Link></li>
        <li><Link to="/dashboard"><button className="btn btn-ghost">Dashboard</button></Link></li>
        <a className="btn btn-ghost text-2xl font-extrabold mr-20 text-white">Task-Management</a>
        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>

                <div className="px-4">
                    <div>
                        <h1 className="text-lg text-white uppercase font-bold text-center">{user?.displayName}</h1>
                    </div>
                    <div>
                        <h1 className="text-lg text-white font-bold">{user?.email}</h1>
                    </div>
                </div>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                    </div>
                </div>
            </> : <>
                <li>   <Link to='/login'>    <button className="btn btn-ghost">Login</button></Link></li>
            </>
        }
    </>
    return (
        <div>
            <div className="navbar bg-pink-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex mr-52">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>


            </div>

        </div>
    );
};

export default Navbar;