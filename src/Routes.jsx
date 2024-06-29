import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import PageNotFound from "./pages/PageNotFound";

export function PageRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Article />} />
                <Route eaxct path="/pagenotfound" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}
