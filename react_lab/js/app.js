import React from "react";

export default class RecipeSearch extends React.Component{
    //components can be defined as classes or functions
    //MUST define render
    state = { 
        recipes: [
            "Apple Pie",
            "Cherry Pie",
            "Pizza Pie",
            "Hamburger", 
            "Ham Steak", 
            "Chocolate Mousse", 
            "Chocolate Ice Cream"
        ],
        searchTerm: ""
    }
    //the state variable contains the array that has the list of all the recipes
    
    render(){
        let recipesList = this.state.recipes.map((recipe) =>{
            return <li>{recipe}</li>;
        });
        //this variable is connected to state array, recipes array
        //map object holds key/value pairs & remembers order
        
        return(
            <div className="recipes">
                <h2>Recipes</h2>
                <input value={this.state.searchTerm}
                onChange={(event)=> { this.updateSearch }}></input>
                <ul>{recipesList}</ul>
            </div>
        )
    }
};
