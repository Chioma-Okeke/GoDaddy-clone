// import React from "react";
import AuthorCard from "./AuthorCard";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImPinterest2 } from "react-icons/im";
import { MdContentCopy } from "react-icons/md";

import { authorData } from "../data/author";

const buttons = [
    {
        id: 1,
        Icon: MdContentCopy,
    },
    {
        id: 2,
        Icon: FaFacebookF,
    },
    {
        id: 3,
        Icon: FaXTwitter,
    },
    {
        id: 4,
        Icon: FaLinkedin,
    },
    {
        id: 5,
        Icon: ImPinterest2,
    },
];

function ArticleHeader() {
    return (
        <header>
            <div className="w-[90%] xl:w-[80%] 2xl:w-[80%] mx-auto border-[rgb(175,175,175)] pb-12">
                <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl xl:text-8xl my-4 lg:my-0">
                    7 must-have web development tools
                </h1>
                <div className="flex flex-col lg:flex-row items-start lg:items-center lg:pt-5">
                    <div className="flex flex-col md:flex-row items-start md:items-center md:mb-4 md:mr-10 lg:mb-0">
                        <p className="bg-[#61edea] border-2 border-[#61edea] text-xs lg:text-sm 2xl:text-base font-semibold py-1 px-2 cursor-pointer transition hover:bg-white delay-300">
                            WEBSITE
                        </p>
                        <p className="my-4 md:ml-5 md:mr-3 text-sm lg:text-base">
                            June 6, 2022 . 7 min read
                        </p>
                        <a href="https://www.godaddy.com/resources/author/amartori">
                            <AuthorCard
                                authorData={authorData[0]}
                                className="rounded-full mb-4 md:mb-0 pr-5 transition ease-in-out hover:bg-[#111111] hover:text-white duration-500 cursor-pointer"
                            >
                                <AuthorCard.NameImage className="w-10" />
                            </AuthorCard>
                        </a>
                    </div>
                    <div className="flex items-center">
                        {buttons.map(({ id, Icon }) => {
                            return (
                                <div
                                    key={id}
                                    className="p-3 2xl:p-5 rounded-full border mr-4 transition ease-in-out hover:bg-black hover:text-white duration-300 cursor-pointer"
                                >
                                    <Icon size={20} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <hr className="border w-[94%] mx-auto border-[#dbd9d9]"/>
        </header>
    );
}

export default ArticleHeader;
