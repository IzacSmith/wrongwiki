import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Article from "./pages/Article";
import SearchResults from "./components/SearchResults";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Articles from "./pages/Articles";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />

      </Routes>
    </>
  );
}
