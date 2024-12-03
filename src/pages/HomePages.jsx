import NewsCard from "../components/NewsCard";
import axios from "axios";
import { useState, useEffect } from "react";
import Error from "../components/Error";
import LoadingCard from "../components/LoadingCard";
function HomePages() {

    const [post, setPosts] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchPosts() {
           try {
               setIsLoading(true);
               const response = await axios.get("https://dc7452ec2493060a.mokky.dev/post")
               setPosts(response.data); //json
           } catch(e){
            setIsError(true);
            console.log(e);
           } finally {
               setIsLoading(false);
           }
        }
        fetchPosts();
    }, []);

    if (isError) {
        return <Error />;
    }
       return(
        <section className="mobile-block"> 
        <div className="container"> 
            {isLoading ? (
                <LoadingCard />
            ) : (
               <>
                 <h1 className="title">последние аниме</h1> 
            <div className="news-list"> 
                {post.map((post) => (
                    <NewsCard key={post.id}  post={post}/>
                ))}
            </div> 
                </>
            )} 
          
             
        </div> 
    </section>  
    );
}

export default HomePages;