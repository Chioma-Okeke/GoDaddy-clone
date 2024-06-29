// import React from 'react'
import { Link } from "react-router-dom";
import { links } from "../../data/footerLinks";

function FooterLinks() {
    return (
        <section className="flex flex-col gap-10 xl:gap-14 2xl:gap-24 w-[90%] xl:w-[95%] lg:flex-row text-white pt-6 mx-auto">
            {links.map(({ index, section, subSections }) => {
                return (
                    <div key={index}>
                        <h3 className="text-2xl font-bold mb-2">{section}</h3>
                        <ul className="list-none flex flex-col">
                            {subSections.map((subSection) => {
                                return (
                                    <Link
                                        key={subSection}
                                        to={"/pagenotfound"}
                                        className="py-1 xl:text-lg hover:underline"
                                    >{subSection}</Link>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </section>
    );
}

export default FooterLinks;
