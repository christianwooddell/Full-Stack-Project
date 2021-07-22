import React from "react";
import { connect } from "react-redux";
import MusicIndex from "./music_index";
import { getSongs } from "../../actions/song_actions";


const mapStateToProps = state => {
    return {
        currentUser: state.entities.users.id
    };
};

const mapDispatchToProps = dispatch => ({
    getSongs: () => dispatch(getSongs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicIndex);