import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import GoogleLogin from "../SocialLogin/GoogleLogin";

const Login = () => {
    const{signIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || "/";
    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const user=result.user;
            console.log(user);
            Swal.fire("You are Logged In Now");
        });
        navigate(from,{replace:true});
    }
    return (
        <div>
            
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/nMK7wCs/code-icon-right-side-white-background.jpg" alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:ml-16">
                        <h1 className="text-2xl text-center font-bold underline">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        
                            </div>
                            <div className="form-control mt-6">
                              
                                <input  className="btn btn-primary" type="submit" name="" value="Login" id="" />
                            </div>
                            <div className="flex">
                            <p className="p-4 ml-16">No Account</p>
                                <Link to='/signUp'><button className="btn btn-info">SignUp</button></Link>
                            </div>
                        </form>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;