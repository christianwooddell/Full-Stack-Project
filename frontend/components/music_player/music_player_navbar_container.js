import React from "react";
import { connect } from "react-redux";
import MusicPlayerNavBar from "./music_player_navbar";
import { logout } from "../../actions/session_actions";

const mapStateToProps = state => {
    return {
        currentUser: users[session.currentUserId]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayerNavBar);