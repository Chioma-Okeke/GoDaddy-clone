import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
    MdKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
    MdOutlineHelpOutline,
} from "react-icons/md";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoPersonCircleOutline } from "react-icons/io5";

import logo from "../../assets/logo.svg";
import logoSmallScreen from "../../assets/logo-small-screen.png";
import SignInDropdown from "./SignInDropdown";

function TopNavSection() {
    const [showDropdown, setShowDropdown] = React.useState(false);

    function handleToggle() {
        setShowDropdown((prevState) => !prevState);
    }

    return (
        <div className="relative">
            <div className="grid grid-cols-2 items-center py-1 px-8 lg:py-8 lg:px-16">
                <div className="flex items-center justify-end flex-row-reverse lg:flex-row lg:justify-start">
                    <a href="https://www.godaddy.com/">
                        <figure className="cursor-pointer">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-40 mr-5 hidden lg:block"
                            />
                            <img
                                src={logoSmallScreen}
                                alt="Logo"
                                className="w-16 mr-5 block lg:hidden"
                            />
                        </figure>
                    </a>
                    <RxHamburgerMenu size={30} cursor={"pointer"} />
                </div>
                <div>
                    <div className="flex items-center gap-8 justify-end text-lg cursor-pointer">
                        <a
                            className="hover:underline"
                            href="https://www.godaddy.com/help"
                        >
                            <p className="hidden lg:block">Help Center</p>
                            <MdOutlineHelpOutline size={25} className="block lg:hidden"/>
                        </a>
                        <div onClick={handleToggle}>
                            <div className="hidden lg:flex items-center gap-1">
                                <p className="hover:underline">Sign In</p>
                                {!showDropdown ? (
                                    <MdKeyboardArrowDown size={20} />
                                ) : (
                                    <MdOutlineKeyboardArrowUp size={20} />
                                )}
                            </div>
                            <IoPersonCircleOutline size={25} className="block lg:hidden"/>
                        </div>
                        <a href="https://cart.godaddy.com/">
                            <PiShoppingCartSimple size={25} />
                        </a>
                    </div>
                </div>
            </div>
            {showDropdown && <SignInDropdown />}
        </div>
    );
}

export default TopNavSection;
