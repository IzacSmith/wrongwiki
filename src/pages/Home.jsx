import { Link } from "react-router-dom";
import articles from "../data/articles.json";
import questionableAdvice from "../data/questionableAdvice.json";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";

const dailyAdviceIndex =
  Math.floor(Date.now() / 86400000) % questionableAdvice.length;

export default function Home({ profile }) {
  const dailyAdvice = questionableAdvice[dailyAdviceIndex];
  const featuredArticle = articles.find((article) => article.id === dailyAdvice?.articleId);
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
          <div className="welcome-copy">
            <span className="eyebrow">The internet's least reliable wisdom</span>
            <h1>How to do absolutely anything</h1>
            {profile && (
              <p className="profile-greeting">
                Welcome back, <strong>{profile.displayName}</strong>. Your
                questionable profile is ready.
              </p>
            )}
            <p>
              Welcome to WrongHow, where every problem has
              an answer. Whether it's correct is another story.
            </p>
          </div>

          <div className="welcome-actions">
            <Link to="/articles" className="primary-link">
              Browse guides
            </Link>
            <Link to="/categories" className="secondary-link">
              Explore topics
            </Link>
          </div>

          <div className="welcome-stats">
            <div>
              <strong>1,200+</strong>
              <span>creative fixes</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>questionable advice</span>
            </div>
            <div>
              <strong>4</strong>
              <span>core categories</span>
            </div>
          </div>
        </section>

        {featuredArticle && (
          <section className="featured-shell">
            <div className="featured-copy">
              <span className="eyebrow">Today's questionable advice</span>
              <h2>{featuredArticle.title}</h2>
              <p>{dailyAdvice.tagline || featuredArticle.description}</p>
              <Link to={`/article/${featuredArticle.id}`} className="primary-link">
                Read today's advice
              </Link>
            </div>

            <img
              src={featuredArticle.image || "https://t4.ftcdn.net/jpg/19/84/25/39/360_F_1984253908_18glU0yV66HGWoiBwV4v7K5x5bEe4JXB.jpg"}
              alt={featuredArticle.title}
            />
          </section>
        )}

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
