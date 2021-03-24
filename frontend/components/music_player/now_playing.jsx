import React from "react";
import { fetchSongs } from "../../util/song_api_util";


class NowPlaying extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // playStatus: "play",
            // muted: false,
            // currentTime = 0,
            // volume = 50

        }
        // this.playAudio = this.playAudio.bind(this);

    }

    // componentDidUpdate

    // playAudio() {

    // }


    render() {
        // const { currentSong } = this.props;
        // const {audio_url} = currentSong;
        return (
            <div className="nowplayingcontainer">
                <audio controls className="nowplaying">
                    <source src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" type="audio/mpeg" />
                </audio>

            </div>
        )
    }

}

export default NowPlaying;