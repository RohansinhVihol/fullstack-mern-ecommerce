import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="mt-5 flex justify-between">
        <div>
          <img className="w-35" src={assets.logo} alt="" />
        </div>
        <div className="">
          <ul className="hidden sm:flex gap-9 font-medium cursor-pointer">
            <NavLink
              to="/"
              className="flex flex-col justify-center items-center hover:scale-105 transition"
            >
              <p>HOME</p>
              <hr className="w-8" />
            </NavLink>
            <NavLink
              to="/collection"
              className="flex flex-col justify-center items-center  hover:scale-105 transition"
            >
              <p>COLLECTION</p>
              <hr className="w-10" />
            </NavLink>
            <NavLink
              to="/about"
              className="flex flex-col justify-center items-center  hover:scale-105 transition"
            >
              <p>ABOUT</p>
              <hr className="w-10" />
            </NavLink>
            <NavLink
              to="/contact"
              className="flex flex-col justify-center items-center  hover:scale-105 transition"
            >
              <p>CONTACT</p>
              <hr className="w-10" />
            </NavLink>
          </ul>
        </div>
        <div className="flex gap-5">
          <img className="w-5 h-5 cursor-pointer" src={assets.search_icon} alt="" />
          <div className="relative group inline-block">
            <img
              className="w-5 h-5 cursor-pointer"
              src={assets.profile_icon}
              alt="profile"
            />

         
            <div
              className="
      absolute right-0 mt-2
      w-32
      bg-white
      border
      rounded-md
      shadow-lg
      text-sm
      hidden
      group-hover:block
    "
            >
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                My Profile
              </p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Orders
              </p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                Logout
              </p>
            </div>
          </div>
          <div>
            <Link to="/cart" className="relative">
              <img className="w-5 h-5 cursor-pointer" src={assets.cart_icon} alt="cart" />

             
              <span
                className="absolute -bottom-1 -right-1 bg-red-500 text-white text-[10px] 
                   w-4 h-4 flex items-center justify-center rounded-full"
              >
                1
              </span>
            </Link>
          </div>
          <img
            onClick={() => setVisible(true)}
            className={`w-5 h-4 pt-0.5 sm:hidden cursor-pointer`}
            src={assets.menu_icon}
            alt=""
          />
        </div>
      </div>
      <div
        className={`absolute top-0 bottom-0 right-0  overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col gap-4">
          <div
          
            className="flex mt-2 ml-2 gap-2 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img
              className="w-5 h-5 rotate-180 "
              src={assets.dropdown_icon}
              alt=""
            />
            <p className="font-bold">Back</p>
          </div>
         
            <div className="flex flex-col divide-y divide-gray-300 cursor-pointer">
              <NavLink onClick={() =>setVisible(false)} className="px-4 py-2 " to="/">
                HOME
              </NavLink>
              <NavLink  onClick={() =>setVisible(false)}className="px-4 py-2" to="/collection">
                COLLECTION
              </NavLink>
              <NavLink  onClick={() =>setVisible(false)}className="px-4 py-2" to="/about">
                ABOUT
              </NavLink>
              <NavLink onClick={() =>setVisible(false)} className="px-4 py-2" to="/contact">
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Navbar;
