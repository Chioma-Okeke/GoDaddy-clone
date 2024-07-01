// import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";

import { controlPanelLinks, inboxLinks } from "../../data/navLinks";

function QuickLinks() {
    return (
        <div>
            <h2 className="text-2xl mb-4 font-semibold">Quick Links</h2>
            <div className="flex flex-col lg:flex-row gap-10">
                <div>
                    <p className="font-semibold">Control Panel Links:</p>
                    <ul className="pl-2">
                        {controlPanelLinks.map(
                            ({ id, linkLabel, linkAddress }) => {
                                return (
                                    <li className="flex items-center gap-1 py-1" key={id}>
                                        <MdOutlineNavigateNext />
                                        <a
                                            href={linkAddress}
                                        >
                                            {linkLabel}
                                        </a>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
                <div>
                    <p className="font-semibold">Inbox Links:</p>
                    <ul className="pl-2">
                        {inboxLinks.map(({ id, linkLabel, linkAddress }) => {
                            return (
                                <li className="flex items-center gap-1 py-1" key={id}>
                                    <MdOutlineNavigateNext />
                                    <a
                                        href={linkAddress}
                                    >
                                        {linkLabel}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default QuickLinks;
