import { useParams, Link } from "react-router-dom";
import articles from "../data/articles.json";
import Footer from "../components/Footer";

export default function Article({ showRelatedArticles }) {
  const { id } = useParams();
  const article = articles.find((item) => item.id === id);

  if (!article) {
    return (
      <>
        <main className="container">
          <h1>Article not found.</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="container article-page">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> /{" "}
          <Link to="/categories">Categories</Link> / {article.category}
        </div>

        <h1>{article.title}</h1>

        <p className="article-description">
          {article.description}
        </p>

        <div className="article-meta">
          <span>
            Written by <strong>{article.author}</strong>
          </span>

          <span className="views">
            👁 {Number(article.views || 0).toLocaleString()} views
          </span>
        </div>

        <img
          className="article-image"
          src={article.image || "https://t4.ftcdn.net/jpg/19/84/25/39/360_F_1984253908_18glU0yV66HGWoiBwV4v7K5x5bEe4JXB.jpg"}
          alt={article.title}
        />

        <div className={`article-layout${showRelatedArticles ? "" : " article-layout--no-related"}`}>
          <section className="steps">
            <h2>Steps</h2>

            {(article.steps || []).map((step, index) => (
              <div className="step" key={index}>
                <h3>
                  Step {index + 1}: {step.title}
                </h3>

                <p>{step.description}</p>
              </div>
            ))}
          </section>

          {showRelatedArticles && (
            <aside>
              <h3>Related Articles</h3>

              {articles
                .filter((item) => item.id !== id)
                .map((item) => (
                  <p key={item.id}>
                    <Link to={`/article/${item.id}`}>
                      {item.title}
                    </Link>
                  </p>
                ))}
            </aside>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

