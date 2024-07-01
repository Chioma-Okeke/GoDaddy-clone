/* eslint-disable react/prop-types */
// import React from 'react'

export default function DropDown({ subMenu, onMouseEnter, onMouseLeave }) {
    return (
        <div>
            <div
                className="font-normal px-2 absolute top-full -left-10 w-[140px] rounded-md bg-white border shadow-sm z-50"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <ul>
                    {subMenu.map((menu) => {
                        return (
                            <li key={menu} className="py-1 px-2 hover:underline cursor-pointer" >
                                {menu}
                            </li>
                        );
                    })}
                </ul>
                <div className="absolute -top-2 left-[45%] rotate-45 w-4 h-4 bg-white border-t-2 border-l-2"></div>
            </div>
        </div>
    );
}
