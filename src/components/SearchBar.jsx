import { useState } from "react";
import { useNavigate } from "react-router-dom";
import articles from "../data/articles.json";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const trimmedQuery = query.trim();

  const suggestions = trimmedQuery
    ? articles
        .filter((article) => {
          const searchableText = [
            article.title,
            article.description,
            article.category,
            article.author,
          ]
            .join(" ")
            .toLowerCase();

          return searchableText.includes(trimmedQuery.toLowerCase());
        })
        .slice(0, 5)
    : [];

  function handleSearch(e) {
    e.preventDefault();

    if (!trimmedQuery) return;

    setIsOpen(false);
    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  }

  function handleSelect(result) {
    setQuery("");
    setIsOpen(false);
    navigate(`/article/${result.id}`);
  }

  return (
    <div className="search-wrap">
      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="How to do absolutely anything..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(Boolean(e.target.value.trim()));
          }}
          onFocus={() => setIsOpen(Boolean(trimmedQuery))}
          onBlur={() => {
            setTimeout(() => setIsOpen(false), 120);
          }}
        />

        <button type="submit">Search</button>
      </form>

      {isOpen && suggestions.length > 0 && (
        <div className="search-suggestions" role="listbox" aria-label="Search suggestions">
          {suggestions.map((article) => (
            <button
              type="button"
              key={article.id}
              className="search-suggestion"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleSelect(article)}
            >
              <strong>{article.title}</strong>
              <span>{article.category}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

