import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { navLinks } from "../../data/navLinks";
import DropDown from "./DropDown";
import { GoArrowRight } from "react-icons/go";
import { IoSearchSharp, IoClose } from "react-icons/io5";
import MenuDropdown from "./mobile-view/MenuDropdown";

function BottomNavSection() {
    const [isHovered, setIsHovered] = React.useState(false);
    const [showSearchInput, setShowSearchInput] = React.useState(false);
    const [hoveredMenu, sethoveredMenu] = React.useState(null);

    function toggleSearchInput() {
        setShowSearchInput((prevState) => !prevState);
    }

    function handleViewSubMenues(menuTitle) {
        sethoveredMenu(menuTitle);
    }

    function handleMouseLeave() {
        sethoveredMenu(null);
    }

    return (
        <section>
            <div className="relative h-16 lg:h-20 flex items-center bg-white">
                <div className="w-full lg:w-[90%] lg:mx-auto flex items-center h-full">
                    <MenuDropdown />
                    <div className="flex-1 hidden lg:block">
                        <a
                            href="https://www.godaddy.com/resources"
                            className="hover:underline font-semibold"
                        >
                            Resource Library
                        </a>
                    </div>
                    <div className="hidden lg:flex items-center flex-1 h-full">
                        <ul className="flex mr-3 h-full items-center">
                            {navLinks.map(
                                ({ id, menuTitle, linkAddress, subMenu }) => {
                                    return (
                                        <li
                                            className="font-semibold mr-6 relative h-full flex items-center cursor-pointer hover:underline"
                                            key={id}
                                            id={menuTitle}
                                            onMouseEnter={() =>
                                                handleViewSubMenues(menuTitle)
                                            }
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className="flex justify-center">
                                                <a href={linkAddress}>
                                                    {menuTitle}
                                                </a>
                                                <RiArrowDropDownLine
                                                    size={25}
                                                />
                                            </div>
                                            {hoveredMenu === menuTitle && (
                                                <DropDown
                                                    subMenu={subMenu}
                                                    onMouseEnter={() =>
                                                        handleViewSubMenues(
                                                            menuTitle
                                                        )
                                                    }
                                                    onMouseLeave={
                                                        handleMouseLeave
                                                    }
                                                />
                                            )}
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                        <a
                            href="https://www.godaddy.com/resources/godaddy-courses"
                            className="hover:underline font-semibold"
                        >
                            GoDaddy Courses
                        </a>
                    </div>
                    <div className="flex items-center lg:gap-4 flex-1 justify-end">
                        {!showSearchInput && (
                            <a
                                href="https://godaddy.substack.com/"
                                className={`${
                                    isHovered ? "gap-2" : ""
                                } font-semibold hidden lg:flex border-2 border-[#111111] py-2 px-3 rounded-lg`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <span className="mr-1">
                                    Sign up for updates
                                </span>
                                {isHovered && <GoArrowRight size={20} />}
                            </a>
                        )}
                        {showSearchInput && (
                            <div className="flex items-center mr-1 lg:mr-2">
                                <button className="bg-[#111111] p-3 mr-1 cursor-pointer">
                                    <IoSearchSharp size={20} color="#fff" />
                                </button>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="px-3 w-72 lg:w-64 py-2 border-2 border-[#111]"
                                />
                            </div>
                        )}
                        <button
                            onClick={toggleSearchInput}
                            className="mr-5 lg:mr-0 bg-[#e8eaeb] p-2 lg:p-3 rounded-md cursor-pointer transition ease-in-out hover:bg-[#111111] hover:text-white duration-500"
                        >
                            {!showSearchInput ? (
                                <IoSearchSharp size={20} />
                            ) : (
                                <IoClose size={20} />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BottomNavSection;
