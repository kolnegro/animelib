import { Link, useParams} from "react-router-dom";

function CategoryCard({category}) {

    const {id} = useParams
    return(
        <Link to={`/category/post/${category.id}`} className="category-list_item">
        <img  className="category-list_icon" src={category.imageUrl} alt="Name" />
        <strong className="category-list_name ">{category.name}</strong>
     </Link>
    )
}

export default CategoryCard;