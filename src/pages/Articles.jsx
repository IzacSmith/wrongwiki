import { Link } from "react-router-dom";
import articles from "../data/articles.json";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";

export default function Articles() {
  return (
    <>
      <main className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> / All Articles
        </div>

        <div className="categories-heading">
          <h1>All How-Tos</h1>
          <p>Browse all of WrongHow's questionable guides.</p>
        </div>

        <div className="article-grid">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
