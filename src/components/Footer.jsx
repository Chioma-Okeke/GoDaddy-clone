// import React from "react";
import SubInput from "./SubInput";
import guideImage from "../assets/guides-image.png";
import arrow from "../assets/arrow.png";
import FooterLinks from "./footer/FooterLinks";
import { Link } from "react-router-dom";
import FooterCopyRight from "./footer/FooterCopyRight";

function Footer() {
    return (
        <footer className="bg-[#111111] py-4">
            <section className="pb-4 pt-2 flex flex-col xl:flex-row items-start xl:items-center md:justify-between w-[90%] xl:w-[95%] mx-auto">
                <SubInput />
                <div className="flex gap-12 my-6 xl:my-0">
                    <div className="text-white">
                        <p className="md:font-bold mb-2">
                            We love taking your call
                        </p>
                        <img src={guideImage} alt="logo image" />
                    </div>
                    <Link to={"/pagenotfound"}>
                        <img
                            src={arrow}
                            alt="Contact Link Arrow"
                            className="cursor-pointer"
                        />
                    </Link>
                </div>
            </section>
            <hr className="border-[#2b2b2b] border-2" />
            <FooterLinks />
            <FooterCopyRight/>
        </footer>
    );
}

export default Footer;
