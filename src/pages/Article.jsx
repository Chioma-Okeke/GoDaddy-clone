// import React from "react";

// import ArticleHeader from "../components/ArticleHeader";
import ArticleBody from "../components/ArticleBody";
import ArticleHeader from "../components/ArticleHeader";
import Footer from "../components/Footer";
import MoreActiclesByAuthor from "../components/MoreActiclesByAuthor";
import ProductsUsed from "../components/ProductsUsed";
import ScrollProgress from "../components/ScrollProgress";
import BottomNavSection from "../components/navbar/BottomNavSection";
import heroImage from "../assets/spanner-gdc9d42982_12801.webp";
import TopNavSection from "../components/navbar/TopNavSection";

function Article() {
    return (
        <div>
            <div>
                <TopNavSection />
                <BottomNavSection />
            </div>
            <ScrollProgress />
            <div>
                <article className="block">
                    <div className="w-[95%] mx-auto mt-5 lg:hidden">
                        <figure>
                            <img src={heroImage} alt="" className="rounded-2xl"/>
                        </figure>
                    </div>
                    <div className="hidden lg:block hero-section">
                        <figure>
                            <img src={heroImage} alt="" className="rounded-2xl"/>
                        </figure>
                    </div>
                    <ArticleHeader />
                    <ArticleBody />
                    <ProductsUsed />
                    <MoreActiclesByAuthor />
                </article>
            </div>
            <Footer />
        </div>
    );
}

export default Article;
