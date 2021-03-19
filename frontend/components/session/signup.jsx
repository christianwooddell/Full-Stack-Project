import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";



class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            gender: "", 
            dob_month: "",
            dob_day: "",
            dob_year: "", 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // componentWillUnmount() {
    //     this.props.clearErrors();
    // }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
            .then( () => this.props.history.push("/home")); //redirect to index once we're logged in
    }

    render(){
        return (
            <div className="session-form">
                <FontAwesomeIcon icon={faSpotify} className="spotify-logo" />
                <h2>Sign up for free to start listening.</h2>
                <form>
                    <label>What's your email?
                        <input type="text"
                            value={this.state.email}
                            placeholder="Enter your email."
                            onChange={this.handleInput("email")} />
                    </label>
                    <label>Confirm your email
                        <input type="text"
                            value={this.state.email}
                            placeholder="Enter your email again." />
                    </label>
                    <label>Create a password
                        <input type="password"
                            value={this.state.password}
                            placeholder="Create a password."
                            onChange={this.handleInput("password")} />
                    </label>

                    <label>What should we call you?
                        <input type="text" 
                        value={this.state.username} 
                        placeholder="Enter a profile name." 
                        onChange={this.handleInput("username")} />
                        <p>This appears on your profile.</p>
                    </label>
                    
           
                    <div className="dob">
                        <label>What's your date of birth?</label>
                        <label>Month</label>
                        <div className="month">
                            <select id="register-dob_month" onChange={this.handleInput("dob_month")}>
                                <option value defaultValue>Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <label>Day</label>
                        <div className="register-dob_day">
                            <input type="text" placeholder="DD" onChange={this.handleInput("dob_day")} />
                        </div>
                        <label>Year</label>
                        <div className="register-dob_year">
                            <input type="text" placeholder="YYYY" onChange={this.handleInput("dob_year")} />
                        </div>
                    </div>
                    <label>What's your gender?</label>
                    <label>
                        <input type="radio"
                            name="gender"
                            value="Male"
                            onChange={this.handleInput("gender")} />Male
                    </label>
                    <label>
                        <input type="radio"
                            name="gender"
                            value="Female"
                            onChange={this.handleInput("gender")} />Female
                    </label>
                    <label>
                        <input type="radio"
                            name="gender"
                            value="Non-binary"
                            onChange={this.handleInput("gender")} />Non-binary
                    </label>
                    <p>By clicking on Sign up, you agree to Spotifina's Terms and Conditions of Use.</p>
                    <p>To learn more about how Spotifina collects, uses, shares and protects your personal data please read Spotifina's Privacy Policy.</p>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>

                <p className="not-new-user">Already have an account?
                        <Link to="/login" className="login-link">Log in.</Link>
                </p>

            </div>
        );
    }
};

export default Signup;