import { RECEIVE_ALL_SONGS } from "./song_actions";

export const NEXT_SONG = "NEXT_SONG";
export const PREVIOUS_SONG = "PREVIOUS_SONG";
// export const GET_SONG_LIST = "GET_SONG_LIST";

export const nextSong = numIndex => ({
    type: NEXT_SONG,
    numIndex
});

export const previousSong = numIndex => ({
    type: PREVIOUS_SONG,
    numIndex
});



