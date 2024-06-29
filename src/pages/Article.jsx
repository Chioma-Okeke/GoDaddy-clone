// import React from "react";

// import ArticleHeader from "../components/ArticleHeader";
import ArticleHeader from "../components/ArticleHeader";
import Footer from "../components/Footer";
import MoreActiclesByAuthor from "../components/MoreActiclesByAuthor";
import ProductsUsed from "../components/ProductsUsed";
import ScrollProgress from "../components/ScrollProgress";
import BottomNavSection from "../components/navbar/BottomNavSection";
function Article() {
    return (
        <div>
            <BottomNavSection/>
            <ScrollProgress/>
            <ArticleHeader />
            <ProductsUsed/>
            <MoreActiclesByAuthor/>
            <Footer />
        </div>
    );
}

export default Article;
