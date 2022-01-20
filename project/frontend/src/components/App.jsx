import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Recipes from "./Recipes";
import Recipe from "./Recipe";
import "../styles/App.css";

import axios from "axios";


function App() {

    const [categorylist, setCategorylist] = useState([]);
    if (!categorylist.length) {
        axios.get("http://127.0.0.1:8000/category/").then(res => {
            setCategorylist(res.data.results)
        });
    }



    return (
        <div> 
            <Router>
                <nav>
                    {/* {categorylist.map(category => <Link to={"/recipes?category=" + category.category_name}> {category.category_name} </Link> )} */}
                    {categorylist.map(category => <ul key={category.id}>
                    <Link to={"/recipes?category=" + category.category_name}>{category.category_name}</Link>
                    </ul>
                    )}
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipes/" element={<Recipes />} />
                    <Route path="/recipes/:id" element={<Recipe />} />
                </Routes>
            </Router>
        </div>
    );
}


export default App;