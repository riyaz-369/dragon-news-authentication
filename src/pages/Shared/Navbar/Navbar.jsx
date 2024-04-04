import { Link } from "react-router-dom";
import userIcon from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLink = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/career">Career</Link></li>
    </>

    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <img className="w-9 mr-2" src={userIcon} alt="" />
                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-sm btn-secondary border-none px-6 bg-slate-600 text-white rounded-none">Log Out
                        </button> :
                        <Link to="/login">
                            <button className="btn btn-sm btn-secondary border-none px-6 bg-slate-600 text-white rounded-none">Log In
                            </button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;