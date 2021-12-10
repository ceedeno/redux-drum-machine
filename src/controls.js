import React from "react";

class Controls extends React.Component {
    render() {
        return (
            <div className="m-1">
                <div className="form-check form-switch">
                    <input onChange={this.props.handlePower} className="form-check-input" type="checkbox" id="power"
                           checked={this.props.power}/>
                    <label className="form-check-label" htmlFor="power">Power</label>
                </div>
                <p id={"display"}>{this.props.message}</p>
                <input id={"volume"} onChange={this.props.handleVolume} type={"range"} min={0} max={1} step={0.05}
                       value={this.props.volume}/>
                <label className="form-check-label"
                       htmlFor="volume">{Math.round(this.props.volume * 100) + '%'}</label>
                <div className="form-check form-switch">
                    <input onChange={this.props.changeGroup} className="form-check-input" type="checkbox" id="group"/>
                    <label className="form-check-label" htmlFor="group">{"Group " + (this.props.group + 1)}</label>
                </div>
            </div>
        );
    }
}

export default Controls;