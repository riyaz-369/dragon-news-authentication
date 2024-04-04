import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            <div className="space-y-2 mb-8">
                <h2 className="text-2xl">Login With</h2>
                <button className="btn btn-outline w-full btn-sm">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full btn-sm">
                    <FaGithub />
                    Login With GitHub
                </button>
            </div>
            <div className="my-6">
                <h2 className="text-2xl mb-2">Find Us</h2>
                <a className="flex gap-2 items-center border-2 rounded-t-lg p-3" href="facebook.com">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className="flex gap-2 items-center border-x-2 p-3" href="facebook.com">
                    <FaTwitter />
                    Twitter
                </a>
                <a className="flex gap-2 items-center border-2 rounded-b-lg p-3" href="facebook.com">
                    <FaInstagram />
                    Instagram
                </a>
            </div>

            {/* Q zone */}
            <div className="space-y-2 mb-6 bg-base-200 p-1">
                <h2 className="text-2xl font-medium p-3">Q Zone</h2>
               <img src={qZone1} alt="" />
               <img src={qZone2} alt="" />
               <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;