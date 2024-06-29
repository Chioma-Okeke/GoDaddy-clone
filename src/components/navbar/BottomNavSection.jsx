import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { navLinks } from "../../data/navLinks";
import DropDown from "./DropDown";
import { GoArrowRight } from "react-icons/go";
import { IoSearchSharp, IoClose } from "react-icons/io5";

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
            <div className="relative">
                <div className="w-[90%] mx-auto flex justify-between items-center">
                    <a href="https://www.godaddy.com/resources">
                        Resource Library
                    </a>
                    <div className="flex items-center">
                        <ul className="flex mr-3">
                            {navLinks.map(
                                ({ id, menuTitle, linkAddress, subMenu }) => {
                                    return (
                                        <li
                                            className="mr-3 relative"
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
                        <a href="https://www.godaddy.com/resources/godaddy-courses">
                            GoDaddy Courses
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        {!showSearchInput && (
                            <a
                                href="https://godaddy.substack.com/"
                                className={`${
                                    isHovered ? "gap-2" : ""
                                } font-semibold flex border-2 border-[#111111] py-2 px-3 rounded-lg`}
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
                            <div className="flex items-center mr-2">
                                <button className="bg-[#111111] p-3 mr-1 cursor-pointer">
                                    <IoSearchSharp size={20} color="#fff" />
                                </button>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="px-3 w-64 py-2 border-2 border-[#111]"
                                />
                            </div>
                        )}
                        <button
                            onClick={toggleSearchInput}
                            className="bg-[#e8eaeb] p-3 rounded-md cursor-pointer transition ease-in-out hover:bg-[#111111] hover:text-white duration-500"
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
