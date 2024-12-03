import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function NewsDatailPage() {

    const {id} = useParams();
    const [post, setPosts] = useState({});

    useEffect(() => {
        async function fetchPosts() {
           try {
                 const response = await axios.get(`https://dc7452ec2493060a.mokky.dev/post/${id}`);
                 setPosts(response.data);
           } catch(e) {
            console.log(e);
           }
        }
        fetchPosts();
    }, [id]);
    return(
        <section className="mobile-block"> 
        <div className="container">  
            <h1 className="title">{post.title}</h1> 
            <h2 className="news-detail-date h2">{post.date}</h2>
        <img src={post.imageUrl} className="news-datail-img" alt="Name" />
        <p className="news-datail-">
            {post.description}
        </p>
        <h4 className="news-card__category primary-inverse">{post.category}</h4>
        </div> 
    </section> 
    );
}

export default NewsDatailPage;