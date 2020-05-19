import React, {Component} from 'react';
import SongsList from '../Components/SongsList.js'

class ItunesContainer extends Component {
    constructor(props){
        super(props);
        this.state= {
            songs:[]
        };
        // this.handleSongSelected= this.handleSongSelected.bind(this);
    }

    // handleSongSelected(characterName){
    //     this.setState({selectedCharacter:characterName})
    // }

    componentDidMount(){
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
        fetch(url)
          .then(response=> response.json())
          .then(itunesFeed =>this.setState({songs: itunesFeed.feed.entry}))
          .catch(error=>console.log(error))
    }

    render(){
        return(
            <div>
                <h2 id="top-20-songs">Top 20 itunes Songs</h2>
                <SongsList itunesSongs={this.state.songs} />
            </div>
        );
    }
}

export default ItunesContainer;