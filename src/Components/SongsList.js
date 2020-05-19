import React, {Component} from 'react';
import Song from './Song.js'

class SongsList extends Component {

    render(){
        console.log(this.props.itunesSongs)

        const songs = this.props.itunesSongs.map(
            (song,index)=>{
                return(
                    <div>
                        <ul>
                        <Song key={index} song={song.title}></Song>
                        </ul>
                    </div>
                )
            }
        )

        return (
            <div>
            <h4>The songs are as follows:</h4>
            {songs}
            </div>
        )
    }

}

export default SongsList;