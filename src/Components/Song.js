import React from 'react';

const Song = (props) => {
    if(!props.song){
        return null;
    }
    return (
        <div>
        <li>{props.song.label}</li>
        </div>
    )
}

export default Song;