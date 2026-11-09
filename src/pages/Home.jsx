import { Link } from "react-router-dom";
import articles from "../data/articles.json";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";

export default function Home() {
  const popularArticles = articles.slice(0, 4);

  const categories = [...new Set(
    articles.map((article) => article.category)
  )]
    .filter(Boolean)
    .sort()
    .slice(0, 4);

  return (
    <>
      <main className="container">
        <section className="welcome"> 
          <h1>How to do absolutely anything</h1>
          <p>
            Welcome to WrongHow, where every problem has
            an answer. Whether it's correct is another story.
          </p>
        </section>

        <section>
          <div className="section-heading">
            <h2>Popular How-Tos</h2>
            <Link to="/articles">View all →</Link>
          </div>

          <div className="article-grid">
            {popularArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        <section className="categories">
          <div className="section-heading">
            <h2>Explore Categories</h2>
            <Link to="/categories">View all →</Link>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link
                to={`/category/${category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                className="category-item"
                key={category}
              >
                {category}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
