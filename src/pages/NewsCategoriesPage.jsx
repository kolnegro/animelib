import { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "../components/CategoryCard";
import{Link} from "react-router-dom";
import allicon from "../assets/images/all.svg";
import LoadingRow from "../components/LoadingRow";
function NewsCategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                 const response = await axios.get('https://dc7452ec2493060a.mokky.dev/category')
                 setCategories(response.data);
            } catch(e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
             
        }
        fetchCategories();
    }, []);
    return(
        <section className="mobile-block"> 
        <div className="container">  
            <h1 className="title">ВСЕ КАТЕГОРИИ</h1> 
            {isLoading ? (
                <LoadingRow />
            ) : (
                <div className="category-list">
                <Link  to="/"  className="category-list_item">
                      <img  className="category-list_icon" src={allicon} alt="Name" />
                      <strong className="category-list_name ">ВСЕ АНИМЕ</strong>
                </Link>
                {categories.map((category) => (
                     <CategoryCard key={category.id} category={category} />
                ))}
              </div>

            )}
   

        </div> 
    </section>   
    );
}

export default NewsCategoriesPage;