import React, { Component } from 'react';

export class RecipeForm extends Component {
    constructor() {
        super()
        this.state = {name: '', link: ''}
    }
    render() {
        return <div>
            <h2>Add a new recipe!</h2>
            <label for="recipename">Recipe Name</label>
            <input type="text" onChange={this.onChangeName.bind(this)} value={this.state.name}/>
            <label for="url">Link</label>
            <input type="text" onChange={this.onChangeLink.bind(this)} value={this.state.link}/>
            <input type="submit" value="Submit" onClick={this.onClick.bind(this)}/>
        </div>
    }
    onChangeName(e){
        let name = e.currentTarget.value
        this.setState({name: name})
    }
    onChangeLink(e){
        let link = e.currentTarget.value
        this.setState({link: link})
    }
    onClick(e){
        e.preventDefault()
        this.props.onSubmit(this.state.name, this.state.link)
        this.setState({name: '', link: ''})
    }
}