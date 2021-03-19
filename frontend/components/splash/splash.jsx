import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {
    render() {
        return(
            <div>
                <section>
                    <div className="splash">
                        <div className="splash-bg"></div>
                        <div className="splash-container">
                            <h1>Listening is everything</h1>
                            <h4>Millions of songs and podcasts. No credit card needed.</h4>
                            <Link to="/signup">GET SPOTIFINA FREE</Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Splash;