import React from "react";
import './drumpad.css'

class DrumPad extends React.Component {

    render() {
        return (
            <div className={"col mb-1 d-flex justify-content-center"}>
                <button id={this.props.id} onClick={() => this.props.playAudio(this.props.index)}
                        className={"btn btn-warning dim btn-large-dim"}>{this.props.id}
                </button>

            </div>);
    }

}

export default DrumPad;