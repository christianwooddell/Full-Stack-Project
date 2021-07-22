import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import NowPlaying from "../music_player/now_playing_container";
import MusicIndex from "../music_index/music_index_container";

const HomePage = ({ currentUser, logout }) => {
    const displaypage = () => (
        <div>
            <div className="homepage">
                    <button className="header-button" onClick={logout}>Log Out</button>
                    <MusicIndex />
            </div>
                <footer>
                    <NowPlaying />
                </footer>
        </div>

    );

    return displaypage();




}

export default HomePage;

