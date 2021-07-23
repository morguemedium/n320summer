import "/styles.css";
import React from "react";

export default class RecipeSearch extends React.Component {
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
  };
  //the state variable contains the array that has the list of all the recipes

  render() {
    //pull out recipes that match search terms
    let matchedRecipes = this.state.recipes.filter((recipe) => {
      return recipe.toLocaleUpperCase().includes(this.state.searchTerm);
    });

    let recipesList = matchedRecipes.map((recipe) => {
      return <li>{recipe}</li>;
    });
    //this variable is connected to state array, recipes array
    //map object holds key/value pairs & remembers order

    return (
      <div className="recipes">
        <h2>Recipes</h2>
        <input
          value={this.state.searchTerm}
          onChange={(event) => {
            this.updateSearch(event);
          }}
        ></input>
        <ul>{recipesList}</ul>
      </div>
    );
  }

  updateSearch(event) {
    this.setState({ searchTerm: event.target.value });
  }
}
