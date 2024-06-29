// import React from 'react'
import { copyRightSectionLink } from "../../data/footerLinks";

function FooterCopyRight() {
    return (
        <section className="text-white max-[375px]:text-xs text-sm lg:text-base gap-6 flex-col lg:flex-row flex items-center justify-between py-3 px-4 md:px-10 text-center lg:text-start">
            <div className="flex-1">
                <p className="mb-3">
                    Copyright © 1999 - 2024 GoDaddy Operating Company, LLC. All
                    Rights Reserved.
                </p>
                <p>
                    Use of this Site is subject to express terms of use. By
                    using this site, you signify that you agree to be bound by
                    these{" "}
                    <a
                        href="https://www.godaddy.com/legal/agreements/universal-terms-of-service-agreement"
                        className="underline"
                    >
                        Universal Terms of Service.
                    </a>
                </p>
            </div>
            <div className=" flex flex-col gap-3">
                <ul className="flex items-center gap-3 md:gap-8">
                    {copyRightSectionLink.map(({ id, label, link }) => {
                        return (
                            <li key={id}>
                                <a className="hover:underline" href={link}>{label}</a>
                            </li>
                        );
                    })}
                </ul>
                <a className="hover:underline" href="https://www.godaddy.com/legal/agreements/cookie-policy">
                    Do not sell my personal information
                </a>
            </div>
        </section>
    );
}

export default FooterCopyRight;
