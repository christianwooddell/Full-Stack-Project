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
            <div>
                <h1>list of all songs</h1>
            </div>
            )
            
    }
}

export default MusicIndex;
