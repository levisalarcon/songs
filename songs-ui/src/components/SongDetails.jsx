import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({song}) =>{
    if(!song){
        return <h2>Select a song</h2>;
    }

    return (
        <div>
            <h2>Details for:</h2>
            <div>
                <p>
                    Title: {song.title}
                    <br/>
                    Length: {song.length}
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        song: state.song
    }
}

export default connect(mapStateToProps)(SongDetails)