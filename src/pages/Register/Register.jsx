import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-1/2 md:w-3/4 lg:w-2/5 mx-auto mt-16 bg-base-200 shadow-xl rounded-lg p-4 md:p-6 lg:p-10">
                <h2 className="text-3xl border-b-2 pb-8 text-center">Register your account</h2>
                <form onSubmit={handleRegister} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-sm mt-4">Already Have An Account ? <Link to="/login"><button className="btn-link font-semibold">Login</button></Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;