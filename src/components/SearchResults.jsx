import { useSearchParams, Link } from "react-router-dom";
import articles from "../data/articles.json";
import ArticleCard from "./ArticleCard";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = articles.filter((article) => {
    const searchableText = `
      ${article.title}
      ${article.description}
      ${article.category}
      ${article.author}
    `.toLowerCase();

    return searchableText.includes(query.toLowerCase());
  });

  return (
    <main className="container">
      <div className="breadcrumbs">
        <Link to="/">Home</Link> / Search
      </div>

      <h1>Search Results</h1>

      <p>
        Results for: <strong>{query}</strong>
      </p>

      {results.length > 0 ? (
        <div className="article-grid">
          {results.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p>No guides found. Try searching for something else.</p>
      )}
    </main>
  );
}
