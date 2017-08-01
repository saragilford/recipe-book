import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RecipeForm } from './RecipeForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        { title: 'Honey Chicken', url: '#' },
        { title: 'Thai Salad', url: '#' },
        { title: 'Popsicles', url: '#' },
        { title: 'Ottolenghi Dip', url: '#' },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Recipe Book!</h1>
        </div>
        <div>
          <ul>
            {this.state.data.map(function(item){
              return <li><a href={item.url}>{item.title}</a></li>
            })}
          </ul>
        </div>
        <RecipeForm onSubmit={this.onAddRecipe.bind(this)}/>
      </div>
    );
  }
  onAddRecipe(name, link){
    console.log(name, link)
  }
}

export default App;
