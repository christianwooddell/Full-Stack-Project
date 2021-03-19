import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../nav/navbar";

class Splash extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <section>
                    <div className="splash">
                        <div className="splash-bg"></div>
                        <div className="splash-container">
                            <h1>Listening is everything</h1>
                            <p>Millions of songs and podcasts. No credit card needed.</p>
                            <a href="/#/signup">GET SPOTIFINA FREE</a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Splash;