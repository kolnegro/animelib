import { Link } from "react-router-dom";

function NewsCard({post}) {
    return (
        <article className="news-card"> 
        <h3 className="news-card__title">{post.titlre}</h3> 
        <h4 className="news-card__category">{post.category}</h4> 
        <strong className="news-card__date">{post.date}</strong> 
        <Link to={`/post/${post.id}`} className="button primary">Читать</Link> 
    </article> 
    );
}

export default NewsCard;