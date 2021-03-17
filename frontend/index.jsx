import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import * as APIUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preLoadedState = undefined;
    if (window.currentUser) {
        preLoadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, root);

    window.signup = APIUtil.postUser;
    window.login = APIUtil.postSession;
    window.logout = APIUtil.deleteSession;
});