import { useParams, Link } from "react-router-dom";
import articles from "../data/articles.json";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function Category() {
  const { category } = useParams();

  const categoryArticles = articles.filter(
    (article) => slugify(article.category) === category 
  );

  const categoryName = categoryArticles[0]?.category;

  if (categoryArticles.length === 0) {
    return (
      <>
        <main className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> / Categories
          </div>

          <h1>Category not found</h1>
          <p>We couldn't find that category.</p>

          <Link to="/categories">Browse categories</Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> /
          <Link to="/categories"> Categories</Link> /
          {" "}{categoryName}
        </div>

        <div className="categories-heading">
          <h1>{categoryName}</h1>
          <p>{categoryArticles.length} guides available</p>
        </div>

        <div className="article-grid">
          {categoryArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
