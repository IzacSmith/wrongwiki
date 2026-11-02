import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <Link to={`/article/${article.id}`} className="article-card">
      <img
        src={article.image || "https://imgs.search.brave.com/ryztnfahB3zEskO75gpkcVTiM4z6JW02ViGDJ9v30Po/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzIwLzQ5LzY3Lzg5/LzM2MF9GXzIwNDk2/Nzg5MzlfMENkWjRm/bFN2ajk5RGhlcmxt/Z0Zxc1RaYkhrcmh4/UkouanBn"}
        alt={article.title}
      />

      <div className="article-content">
        <span className="category">{article.category}</span>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <small>By {article.author}</small>
      </div>
    </Link>
  );
}
