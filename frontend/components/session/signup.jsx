import React from "react";

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            gender: "", //do radio buttons here later
            dob_month: "", //fix this
            dob_day: "", //fix this
            dob_year: "", //fix this
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
        this.props.processForm(this.state)
            .then( () => this.props.history.push("/browse")); //redirect to index once we're logged in
    }

    render(){
        return (
            <div className="session-form">
                <h2>GET SPOTIFINA FREE</h2>
                <form>
                    <label>Username:
                        <input type="text" 
                        value={this.state.username} 
                        placeholder="Username" 
                        onChange={this.handleInput("username")} />
                    </label>
                    <label>Email:
                        <input type="text" 
                        value={this.state.email} 
                        placeholder="Email" 
                        onChange={this.handleInput("email")} />
                    </label>
                    <label>Password:
                        <input type="password" 
                        value={this.state.password} 
                        placeholder="Password" 
                        onChange={this.handleInput("password")} />
                    </label>

                    <div className="dob">
                        <label>What's your date of birth?</label>
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
                        <div className="register-dob_day">
                            <input type="number" placeholder="DD" onChange={this.handleInput("dob_day")} />
                        </div>
                        <div className="register-dob_year">
                            <input type="number" placeholder="YYYY" onChange={this.handleInput("dob_year")} />
                        </div>
                    </div>
                    <label>Gender:</label>
                    <label>
                        <input type="radio"
                            value="Male"
                            placeholder="Gender"
                            onChange={this.handleInput("gender")} />Male
                    </label>
                    <label>
                        <input type="radio"
                            value="Female"
                            placeholder="Gender"
                            onChange={this.handleInput("gender")} />Female
                    </label>
                    <label>
                        <input type="radio"
                            value="Non-binary"
                            placeholder="Gender"
                            onChange={this.handleInput("gender")} />Non-binary
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        );
    }
};

export default Signup;