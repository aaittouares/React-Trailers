import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {searchText: '', placeHolder:'Tapez votre film svp ....'};
    }

    render(){
        return (
            <div>
                <input onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
                <p>{this.state.searchText}</p>
            </div>
        );
    }

    handleChange(event){

        this.setState({searchText: event.target.value});
    }
}

export default SearchBar;