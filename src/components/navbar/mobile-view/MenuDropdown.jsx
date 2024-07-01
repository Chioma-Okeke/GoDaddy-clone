import React from "react";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { navLinks } from "../../../data/navLinks";
import { RiArrowDropDownLine } from "react-icons/ri";
import DropDown from "../DropDown";

function MenuDropdown() {
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [pickedMenu, setPickedMenu] = React.useState(null)

    function handleToggle() {
        setShowDropdown((prevState) => !prevState);
    }

    function handlePickedMenu(menuTitle) {
        setPickedMenu(menuTitle);
    }

    return (
        <div className="relative block lg:hidden h-full">
            <div className="ml-5 lg:ml-0 flex items-center gap-1 h-full" onClick={handleToggle}>
                <p className="text-blue-600">Menu</p>
                {!showDropdown ? (
                    <MdKeyboardArrowDown size={20} color="#2563eb" />
                ) : (
                    <MdOutlineKeyboardArrowUp size={20} color="#2563eb" />
                )}
            </div>
            {showDropdown && (
                <ul className="absolute left-0 top-full bg-white z-50 flex flex-col h-fit p-2">
                    {navLinks.map(({ id, menuTitle, linkAddress, subMenu }) => {
                        return (
                            <li
                                className="w-full font-semibold mr-6 relative flex justify-between items-center cursor-pointer hover:underline"
                                key={id}
                                id={menuTitle}
                            >
                                <div className="flex justify-center">
                                    <a href={linkAddress}>{menuTitle}</a>
                                    <RiArrowDropDownLine size={25} onClick={() => handlePickedMenu(menuTitle)}/>
                                </div>
                                {pickedMenu === menuTitle && (
                                    <DropDown
                                        subMenu={subMenu}
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default MenuDropdown;
