import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BlogLogo from "../assets/images/blogs-logo.png";
import SearchIcon from "../assets/icons/search-icon.svg";
import BlogLogoMobile from "../assets/icons/logo-icon.svg";
import MenuIcon from "../assets/icons/menu-icon.svg";
import CloseIcon from "../assets/icons/close-icon.svg";
import ButtonCustom from "../components/ButtonCustom/ButtonCustom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(0);
  const { pathname: location } = useLocation();

  function handleMenu() {
    setOpenMenu(!openMenu);
  }
  return (
    <header className="w-full z-20 px-4 shadow-lg mb-7">
      <div className="container mx-auto py-4">
        <div className="flex items-center gap-2">
          <div className="w-auto flex gap-10 items-center">
            <Link to="/">
              <img
                src={BlogLogo}
                className="w-32 h-auto sm:block hidden"
                alt="blogs"
              />
              <img
                src={BlogLogoMobile}
                className="w-8 h-auto sm:hidden block"
                alt="blogs"
              />
            </Link>
            <ul
              className={[
                openMenu ? "opacity-100 z-30" : "invisible opacity-0",
                "fixed md:relative  md:visible flex items-center justify-center md:opacity-100 flex-col md:flex-row md:gap-6 bg-white md:bg-transparent inset-0",
              ].join(" ")}
            >
              <li
                className={`py-6 md:py-0 font-medium text-base hover:text-black ${
                  location === "/" ? "text-black" : "text-gray-500"
                }`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`py-6 md:py-0 font-medium text-base hover:text-black ${
                  location === "/artikel" ? "text-black" : "text-gray-500"
                }`}
              >
                <Link to="/">Artikel</Link>
              </li>
            </ul>
          </div>
          <div className="w-full flex items-center justify-end gap-2">
            {/* Start Search Field */}
            <div className="relative block">
              <img
                src={SearchIcon}
                className="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-3"
              />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="border border-gray-100 rounded-lg py-2 pl-10 pr-6 bg-white placeholder-gray-200 text-gray-900 appearance-none w-full block focus:outline-none"
              />
            </div>
            {/* End Search Field */}
            {/* Start Desktop Button */}
            <div className="hidden md:inline-flex gap-1 items-center">
              <ButtonCustom
                bgColor="bg-none"
                textColor="text-black"
                bgHover="hover:bg-none"
                textHover="hover:text-black"
              >
                <span className="mr-2">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="36" height="36" rx="18" fill="#F3F4F9" />
                    <path
                      d="M18 18C20.3012 18 22.1667 16.1345 22.1667 13.8333C22.1667 11.5321 20.3012 9.66666 18 9.66666C15.6988 9.66666 13.8333 11.5321 13.8333 13.8333C13.8333 16.1345 15.6988 18 18 18Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.1583 26.3333C25.1583 23.1083 21.95 20.5 18 20.5C14.05 20.5 10.8417 23.1083 10.8417 26.3333"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Sign In
              </ButtonCustom>
              <ButtonCustom>
                <span className="mr-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.94501 2.70001L3.78751 9.21751C3.55501 9.46501 3.33001 9.95251 3.28501 10.29L3.00751 12.72C2.91001 13.5975 3.54001 14.1975 4.41001 14.0475L6.82501 13.635C7.16251 13.575 7.63501 13.3275 7.86751 13.0725L14.025 6.55501C15.09 5.43001 15.57 4.14751 13.9125 2.58001C12.2625 1.02751 11.01 1.57501 9.94501 2.70001Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.91748 3.78751C9.23998 5.85751 10.92 7.44001 13.005 7.65001"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.25 16.5H15.75"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Create Post
              </ButtonCustom>
            </div>
            {/* End Desktop Button */}

            {/* Start Button Hamburger Mobile */}
            <div
              className={[
                openMenu ? "fixed top-0 right-0 z-50" : "inline-block",
                "md:hidden",
              ].join(" ")}
            >
              <button
                onClick={handleMenu}
                className="bg-none focus:outline-none inline-block"
              >
                <img
                  src={openMenu ? CloseIcon : MenuIcon}
                  className="w-9"
                  alt="hamburger-mobile"
                />
              </button>
            </div>
            {/* End Button Hamburger Mobile */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
