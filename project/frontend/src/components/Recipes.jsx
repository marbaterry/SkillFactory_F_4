import React, {useState} from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "../styles/Recipes.css";

import axios from "axios";

const Recipes = () => {
    const location = useLocation();
    const search = location.search;
    const query = new URLSearchParams(search);
    let c = query.get('category')
    
    const [recipelist, setRecipelist] = useState([]);
    if (!recipelist.length) {
        axios.get("http://127.0.0.1:8000/recipe/").then(res => {
            setRecipelist(res.data.results)
            });
    }

    return (
        <div>
            <h3>Выбрана категория {query.get('category')}</h3>
            {recipelist.filter(e => e.recipe_category == c).map(recipe => <ul key={recipe.id}>
                <Link to={"/recipes/" + recipe.id}>{recipe.recipe_name}</Link>
                {/* <h4>{recipe.recipe_name}</h4>
                <h5>Состав</h5>
                <ul>{recipe.recipe_composition.split(";").map(elem => <li> {elem} </li>)}</ul>
                <h5>Рецепт</h5>
                <ul>{recipe.recipe_text.split(";").map(elem => <li> {elem} </li>)}</ul> */}
            </ul>)}
        </div>
    );
}

export default Recipes;