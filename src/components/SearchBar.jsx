import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    const search = query.trim();

    if (!search) return;

    navigate(`/search?q=${encodeURIComponent(search)}`);
  }

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="How to do absolutely anything..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}
