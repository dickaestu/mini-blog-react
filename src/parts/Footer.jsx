import React from "react";
import Logo from "../assets/images/blogs-logo.png";
import { Link } from "react-router-dom";
import MailIcon from "../assets/icons/mail-icon.svg";
import PhoneIcon from "../assets/icons/phone-icon.svg";
import LocationIcon from "../assets/icons/location-icon.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 px-4">
      <div className="container mx-auto pt-8 pb-5">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 mb-4 md:mb-0">
            <div className="w-36 mb-2">
              <img src={Logo} className="w-full" alt="blogs logo" />
            </div>
            <div className="text-sm text-gray-400 max-w-[397px]">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin libero libero
              vel eget magna ornare. Amet facilisis neque viverra ultrices
              eleifend netus pretium a.
            </div>
          </div>
          <div className="w-5/12 md:w-3/12 ">
            <div className="font-semibold text-base">Link</div>
            <ul className="">
              <li className="ml-2 font-semibold text-sm py-2">
                <Link className="hover:underline" to="/">
                  Articles
                </Link>
              </li>
              <li className="ml-2 font-semibold text-sm py-2">
                <Link className="hover:underline" to="/">
                  Writers
                </Link>
              </li>
              <li className="ml-2 font-semibold text-sm py-2">
                <Link className="hover:underline" to="/">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-7/12 md:w-3/12">
            <div className="font-semibold text-base">Contact</div>
            <ul className="">
              <li className="ml-2 font-semibold text-sm py-2 flex gap-2 items-center">
                <span>
                  <img src={PhoneIcon} alt="phone" />
                </span>
                021-98765-4321
              </li>
              <li className="ml-2 font-semibold text-sm py-2 flex gap-2 items-center">
                <span>
                  <img src={MailIcon} alt="mail" />
                </span>
                support@example.com
              </li>
              <li className="ml-2 font-semibold text-sm py-2 flex gap-2 items-center">
                <span>
                  <img
                    src={LocationIcon}
                    className="w-8 md:w-auto"
                    alt="location"
                  />
                </span>
                8502 Preston Rd. Inglewood, Maine 98380
              </li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-black text-center mt-6">
          &copy; 2023 Blogs - All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
