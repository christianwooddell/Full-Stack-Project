import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import MusicPlayerNavBar from "../music_player/music_player_navbar";


const HomePage = ({ currentUser, logout }) => {
    const personalGreeting = () => (
        <header className="homepage">
                <MusicPlayerNavBar />
                <FontAwesomeIcon icon={faSpotify} className="spotify-logo" />
                <h4>Spotifina</h4>
                <button className="header-button" onClick={logout}>Log Out</button>
        
        </header>
    );

    return personalGreeting();
}

export default HomePage;

