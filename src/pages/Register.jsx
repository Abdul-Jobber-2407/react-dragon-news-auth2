import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const { createNewUser, setUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        // get from data 
        const form = new FormData(e.target);
        const name = form.get("name");
        if (name.length < 5) {
            setError({ ...error, name: "must be more than 5 character long" });
            return;
        }

        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
 

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                updateUserProfile({displayName: name, photOURL:photo})
                .then(() =>{
                    navigate("/")
                })
                .catch(err =>{
                    // console.log(err);
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode, errorMessage);
            })
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center mt-7">Register Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    {/* name input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="name"
                            name="name"
                            className="input input-bordered" required />
                    </div>
                    {error.name && (
                        <label className="label text-xs text-rose-500">
                            {error.name}
                        </label>
                    )
                    }
                    {/* photo input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-Url</span>
                        </label>
                        <input
                            type="text"
                            placeholder="photo-url"
                            name="photo"
                            className="input input-bordered" required />
                    </div>
                    {/* email input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            name="email"
                            className="input input-bordered" required />
                    </div>
                    {/* password Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary rounded-none">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">
                    Already Have An Account ?
                    <Link className="text-red-500" to="/auth/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;