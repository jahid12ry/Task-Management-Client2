import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-black text-base-content rounded">
                <nav className="grid grid-flow-col gap-4 text-white">
                    <Link to="/"><button className="btn btn-ghost">Home</button></Link>
                    <Link to="/about"><button className="btn btn-ghost">About</button></Link>
                    <Link to="/login"><button className="btn btn-ghost">Login</button></Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-white">
                        <div> <Link to="https://www.facebook.com/"> <FaFacebook></FaFacebook></Link></div>
                         <div>
                            <Link to="https://www.instagram.com/"><FaInstagram></FaInstagram></Link>
                         </div>
                    </div>
                </nav>
                <aside>
                    <p className="text-white">Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;