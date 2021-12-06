import React from "react";

class DrumPad extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this.props.id);
        this.props.playAudio(this.props.index);
    }

    render() {
        return (<div className={"col mb-1"}>
            <button onClick={this.handleClick}
                    className={"btn btn-primary w-100 py-4 align-items-stretch d-flex"}>{this.props.id}
            </button>

        </div>);
    }

};

export default DrumPad;