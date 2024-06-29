/* eslint-disable react/prop-types */
// import React from "react";
import { createContext, useContext } from "react";
import { GoArrowRight } from "react-icons/go";
import classnames from "classnames";
// import { authorData } from "../data/author";

const AuthorCardContext = createContext();

function useAuthorCardContext() {
    const context = useContext(AuthorCardContext);
    if (!context) {
        throw new Error(
            "useAuthorCardContext must be used within an AuthorCard"
        );
    }
    return context;
}

function AuthorCard({ children, authorData, className }) {
    let cardClass = "p-2 border  border-[#b4b4b4]";
    const allClasses = classnames(cardClass, className);
    console.log(authorData);
    return (
        <AuthorCardContext.Provider value={{ authorData }}>
            <div className={allClasses}>{children}</div>
            {/* <div>
                <h6>ARTICLE TAGS</h6>
                {}
            </div> */}
        </AuthorCardContext.Provider>
    );
}

AuthorCard.NameImage = function AuthorCardNameImage({ className }) {
    const { authorData } = useAuthorCardContext();
    return (
        <div className="flex items-center gap-3">
            <img
                src={authorData.image}
                alt=""
                className={`rounded-full min-w-11 ${className}`}
            />
            <p className="font-semibold text-sm">{authorData.name}</p>
        </div>
    );
};

AuthorCard.Description = function AuthorCardDescription() {
    const { authorData } = useAuthorCardContext();
    console.log(authorData, "in description component");
    return <p className="mt-5 mb-8 md:text-lg">{authorData.funFact}</p>;
};

AuthorCard.MoreActicles = function AuthorCardMoreActicles({
    enter,
    leave,
    isHovered,
}) {
    console.log(enter, leave, isHovered);
    const { authorData } = useAuthorCardContext();
    return (
        <a href="https://www.godaddy.com/resources/author/amartori">
            <div
                className={`flex items-center font-bold cursor-pointer ${
                    isHovered ? "gap-1" : ""
                }`}
                onMouseEnter={enter}
                onMouseLeave={leave}
            >
                <span className="mr-1">More Articles by {authorData.name}</span>
                <GoArrowRight size={20} />
            </div>
        </a>
    );
};

export default AuthorCard;
