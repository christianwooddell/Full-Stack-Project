import React from "react";
import { Link, NavLink } from "react-router-dom";
// import styling and logo

// class NavBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.logoutUser = this.logoutUser.bind(this)
//     }

//     logoutUser() {
//         this.props.logout()
//             .then(() => this.props.history.push("/"));
//     }

//     render() {
//         const { currentUser } = this.props;
//         const displayUser = currentUser ? (
//             <div className="navbar-user">
//                 <Link to="/home">
//                     <span className="navbar-username">{currentUser.username}</span>
//                 </Link>
//                 <span 
//                     onClick={() => this.logoutUser()}
//                     classname="user-logout">log out</span>
                
//             </div>
//         ) : (
//             <div>
//                 <Link to="/signup" className="signup-button">Sign Up</Link>
//                 <Link to="/login" className="login-button">Log In</Link>
//             </div>
//         );
//         return (
//             <nav className="nav-bar">
//                 <div>logo and stuff</div>
//             </nav>
//         )
//     }
// }


export default NavBar;
   