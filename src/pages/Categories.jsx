import { Link } from "react-router-dom";
import articles from "../data/articles.json";
import Footer from "../components/Footer";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function Categories() {
  const categories = [...new Set(
    articles.map((article) => article.category)
  )]
    .filter(Boolean)
    .sort();

  return (
    <>
      <main className="container categories-page">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> / Categories 
        </div>

        <div className="categories-heading">
          <h1>Explore Categories</h1>
          <p>Find a guide for absolutely anything.</p>
        </div>

        <div className="category-grid">
          {categories.map((category) => {
            const count = articles.filter(
              (article) => article.category === category
            ).length;

            return (
              <Link
                to={`/category/${slugify(category)}`}
                className="category-item"
                key={category}
              >
                <h2>{category}</h2>
                <p>{count} guides</p>
                <span>Explore →</span>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
