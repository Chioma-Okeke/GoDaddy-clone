// import React from 'react'

import { Link } from "react-router-dom";
import FooterLinks from "../components/footer/FooterLinks";
import Footer from "../components/Footer";

function PageNotFound() {
    return (
        <div>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404 mb-8">
                        <h1>Oops!</h1>
                    </div>
                    <h2 className="">404 - Page not found</h2>
                    <p className="text-base md:text-lg">
                        The page you are looking for is under construction.
                    </p>
                    <Link to={"/"}>Go back to Article</Link>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default PageNotFound;
