 
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
 
 
 
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";


const GoogleLogin = () => {
    const {googleSignIn}=useContext(AuthContext);
 
    const navigate=useNavigate();
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            Swal.fire("You are Logged In Now");
            navigate('/');
             
           
        })
       

    }   
     return (
        <div>
            <div className="ml-32 p-2">
                <button onClick={handleGoogleSignIn} className="btn btn-error">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>
            
        </div>
    );
};

export default GoogleLogin;