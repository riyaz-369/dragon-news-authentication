import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import leftImg1 from "../../../assets/1.png";
import leftImg2 from "../../../assets/2.png";
import leftImg3 from "../../../assets/3.png";
import moment from 'moment';
import { IoCalendarClearOutline } from "react-icons/io5";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-2xl">All Categories</h2>
            <div className="space-y-5 mt-5">
                {
                    categories.map(category =>
                        <NavLink to={`/category/${category.id}`} key={category.id} className='block text-xl font-medium mb-4 ml-6'>
                            {category.name}
                        </NavLink>)
                }
            </div>
            <div className="space-y-4 my-6 bg-base-200 rounded-lg hover:translate-y-px shadow-xl p-4 hover:bg-orange-50">
                <img src={leftImg1} alt="" />
                <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className="flex gap-6">
                    <span className="font-medium">Sports</span>
                    <p className="flex items-center gap-2">
                        <IoCalendarClearOutline />
                        {moment().format("MMMM D, YYYY")}
                    </p>
                </div>
            </div>
            <div className="space-y-4 my-6 bg-base-200 rounded-lg hover:translate-y-px shadow-xl p-4 hover:bg-orange-50">
                <img src={leftImg2} alt="" />
                <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className="flex gap-6">
                    <span className="font-medium">Sports</span>
                    <p className="flex items-center gap-2">
                        <IoCalendarClearOutline />
                        {moment().format("MMMM D, YYYY")}
                    </p>
                </div>
            </div>
            <div className="space-y-4 my-6 bg-base-200 rounded-lg hover:translate-y-px shadow-xl p-4 hover:bg-orange-50">
                <img src={leftImg3} alt="" />
                <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className="flex gap-6">
                    <span className="font-medium">Sports</span>
                    <p className="flex items-center gap-2">
                        <IoCalendarClearOutline />
                        {moment().format("MMMM D, YYYY")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;