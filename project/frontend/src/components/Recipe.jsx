import React, {useState} from "react";
import { useParams } from "react-router";
import "../styles/Recipe.css";

import axios from "axios";



const Resipe = () => {
    const params = useParams();
    

    const [resipelist, setResipelist] = useState({});
    if (!resipelist.id) {
        axios.get("http://127.0.0.1:8000/recipe/" + params.id).then(res => {
            setResipelist(res.data)
        });
    }
    

    return (
        <div>
            <h4>{resipelist.recipe_name}</h4>
            <h5>Состав</h5>
            <ul>{String(resipelist.recipe_composition).split(";").map(elem => <li> {elem} </li>)}</ul>
            <h5>Рецепт</h5>
            <ul>{String(resipelist.recipe_text).split(";").map(elem => <p> {elem} </p>)}</ul>
        </div>
    );
}

export default Resipe;