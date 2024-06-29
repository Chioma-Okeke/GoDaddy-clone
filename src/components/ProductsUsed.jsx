import React from "react";
import cardImage from "../assets/godaddy-pro-blog-ad-image.webp";
import { GoArrowRight } from "react-icons/go";

function ProductsUsed() {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <section className="bg-[#f5f5f5] px-4 py-10 md:p-12">
            <h1 className="text-center font-semibold text-3xl mb-8">
                Products Used
            </h1>
            <a className="block max-w-[600px] w-full md:w-[40%] mx-auto" href="https://www.godaddy.com/pro" >
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className=" rounded-b-2xl bg-white shadow-lg transition ease-in-out hover:bg-[#f5f5f5] duration-300"
                >
                    <img src={cardImage} alt="Card Image" className="w-full" />
                    <div className="p-3">
                        <h4>GoDaddy Pro</h4>
                        <div
                            className={` flex items-center ${
                                isHovered ? "gap-1" : ""
                            }`}
                        >
                            <span className="mr-2">Learn more</span>
                            <GoArrowRight size={20} />
                        </div>
                    </div>
                </div>
            </a>
        </section>
    );
}

export default ProductsUsed;
