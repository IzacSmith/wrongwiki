import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <Link to={`/article/${article.id}`} className="article-card">
      <img
        src={article.image || "https://t4.ftcdn.net/jpg/19/84/25/39/360_F_1984253908_18glU0yV66HGWoiBwV4v7K5x5bEe4JXB.jpg"}
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
