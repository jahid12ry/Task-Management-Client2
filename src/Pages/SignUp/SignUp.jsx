import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {createUser,updateUserProfile}=useContext(AuthContext);
    const navigate=useNavigate();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name,data.photoURL)
            .then(()=>{
                console.log('user profile info updated');
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Profile is Updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
            })
            .catch(error=>console.log(error))
        })
    };
    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/nMK7wCs/code-icon-right-side-white-background.jpg" alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:ml-16">
                        <h1 className="text-2xl text-center font-bold underline">SignUp</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register("photoURL")}  placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 8,

                                })} name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <p className="text-blue-900">password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-blue-900">password is  must be 6</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-blue-900">password is must be 8</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" name="" value="Login" id="" />
                            </div>
                            <div className="flex">
                                <p className="p-4 ml-12">Have Account?</p>
                                <Link to='/login'><button className="btn btn-info">Login</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;