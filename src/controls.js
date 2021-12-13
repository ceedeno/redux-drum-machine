import React from "react";
import './controls.css'

class Controls extends React.Component {
    render() {
        return (
            <div id="controls-div" className="m-1">
                <div className="form-check form-switch">
                    <input onChange={this.props.handlePower} className="form-check-input" type="checkbox" id="power"
                           checked={this.props.power}/>
                    <label className="form-check-label" htmlFor="power">Power</label>
                </div>
                <p id={"display"}>{this.props.message}</p>
                <div id="volume-div" className="mb-2 d-flex flex-column">
                    <input id={"volume"} onChange={this.props.handleVolume} type={"range"} min={0} max={1} step={0.05}
                           value={this.props.volume}/>
                    <label className="form-check-label"
                           htmlFor="volume">{" Volume: " + Math.round(this.props.volume * 100) + '%'}</label>
                </div>
                <div className="form-check form-switch">
                    <input onChange={this.props.changeGroup} className="form-check-input" type="checkbox" id="group"/>
                    <label className="form-check-label" htmlFor="group">{"Group " + (this.props.group + 1)}</label>
                </div>
            </div>
        );
    }
}

export default Controls;