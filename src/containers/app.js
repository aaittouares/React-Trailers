import React, {Component} from 'react';
import axios from 'axios';

import SearchBar from '../components/search-bar';
import VideoList from './video-list';

const API_END_POINT = 'https://api.themoviedb.org/3/';

const POPULAR_MOVIES_URL = 'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images';

const API_KEY = 'api_key=f35fd0b9c4d5513a8779aabe2c0f5ca0';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {movieList:{}, currentMovie:{}};
    }

    componentWillMount(){
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
        .then((response)=>{
            
            this.setState({movieList:response.data.results.slice(1,6)});
            this.setState({currentMovie:response.data.results[0]});
            console.log('-----------------');
            console.log('',this.state.movieList);
            console.log('-----------------');

            console.log('-----------------');
            console.log('',this.state.currentMovie);
            console.log('-----------------');
        });
    }

    render(){
        return (
            <div>
                <SearchBar/>
                <VideoList/>
            </div>
        );
    }
};

export default App;