import React from "react";
import './drumpad.css'

class DrumPad extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.playAudio(this.props.index);
    }

    render() {
        return (
            <div className={"col mb-1 d-flex justify-content-center"}>
                <button id={this.props.id} onClick={this.handleClick}
                        className={"btn btn-warning dim btn-large-dim"}>{this.props.id}
                </button>

            </div>);
    }

}

export default DrumPad;