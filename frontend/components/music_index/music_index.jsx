import React from "react";

class MusicIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            

        }
    }

    componentDidMount() {
        this.props.getSongs()
    }
    
    render () {
        return (
            <h1>index</h1>
        )

    }
}

export default MusicIndex;
