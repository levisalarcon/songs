import { combineReducers } from 'redux';

export const songsListReducer = () => {
    return [
        { title: 'a', length: '4:05'},
        { title: 'b', length: '3:01'},
        { title: 'c', length: '2:45'},
        { title: 'd', length: '1:00'},
    ]
}

export const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong;
}

export const reducers = combineReducers({
    songs: songsListReducer,
    selectedSong: selectedSongReducer
})