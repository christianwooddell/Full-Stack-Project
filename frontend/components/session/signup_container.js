import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUp, clearSessionErrors } from "../../actions/session_actions";
import Signup from "./signup";

const mapStateToProps = state => ({
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    signup: formUser => dispatch(signUp(formUser)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);