import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import MusicPlayerNavBar from "../music_player/music_player_navbar";
// import NowPlaying from "../now_playing/now_playing";

const HomePage = ({ currentUser, logout }) => {
    const personalGreeting = () => (
        <header className="homepage">
                <MusicPlayerNavBar />
                
                <button className="header-button" onClick={logout}>Log Out</button>
        </header>

    );

    return personalGreeting();

    
    // render () {
        // return (
        //     personalGreeting();
    //         <div className="musiccontainer">  
    //             <NowPlaying />
    //         </div>
        // )
    // }
}

export default HomePage;

