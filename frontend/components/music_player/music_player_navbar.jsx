import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

const MusicPlayerNavBar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <header className="loggedinhead">
            <nav className="login-signup2">
                <div href="/" className="navbarlogo">
                    <FontAwesomeIcon icon={faSpotify} className="spotify-logo" />
                    <h4>Spotifina</h4>
                </div>
                <ul>
                    <li><a href="https://www.linkedin.com/in/christian-wooddell/" id="navbarlink">LinkedIn</a></li>
                    <li><a href="https://github.com/christianwooddell" id="navbarlink">Github</a></li>
                    <li><a href="/" id="navbarlink">Portfolio</a></li>
                    <li>|</li>
                    {/* dropdown here */}
                </ul>
            </nav>
        </header>
    );

    return sessionLinks();
}


export default MusicPlayerNavBar;