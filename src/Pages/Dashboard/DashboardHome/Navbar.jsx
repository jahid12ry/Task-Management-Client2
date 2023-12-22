import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="lg:navbar bg-neutral text-neutral-content">
                <button className="btn btn-ghost text-xl">Task Management DashBoard</button>
                <Link to="/"><button className="btn btn-primary">Home page</button></Link>
            </div>

        </div>
    );
};

export default Navbar;