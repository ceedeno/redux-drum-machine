import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import store from "./redux/store";
import {displayMessage, setPower, setVolume} from "./redux/actions"
import * as ReactRedux from "react-redux";
import {audios} from "./constants/audios";
import Controls from "./controls";
import DrumPad from "./drumpad";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {group: 0};
        this.playAudio = this.playAudio.bind(this);
        this.handlePower = this.handlePower.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.changeGroup = this.changeGroup.bind(this);
    }

    changeGroup(){
        this.setState((state) => ({group: state.group === 0 ? 1 : 0}))
    }

    handleVolume(e) {
        this.props.setNewVolume(e.target.value);
    }

    handlePower() {
        console.log("Power: " + this.props.power);
        this.props.turnPower();
    }

    playAudio(index) {
        if (this.props.power) {
            audios[this.state.group][index].audio.volume = this.props.volume;
            audios[this.state.group][index].audio.play();
            this.props.displayNewMessage(audios[this.state.group][index].description);
        }
    }

    render() {
        return (
            <div className="container col-sm-6">
                <div className={"row"}>
                    <div className={"col-sm-8"}>
                        <div className={"row row-cols-3 row-cols-lg-3"}>
                            {audios[this.state.group].map((audio, index) => <DrumPad
                                key={audio.id}
                                id={audio.id}
                                label={audio.description}
                                index={index}
                                playAudio={this.playAudio}/>)}
                        </div>
                    </div>
                    <div className={"col-sm-4"}>
                        <Controls
                            handlePower={this.handlePower}
                            power={this.props.power}
                            message={this.props.message}
                            handleVolume={this.handleVolume}
                            volume={this.props.volume}
                            changeGroup={this.changeGroup}
                            group={this.state.group}
                        />
                    </div>

                </div>
            </div>
        );
    }
}

// End of React Definition

/**************************************************************************************************************************/

// React-Redux connection
const mapStateToProps = (state) => {
    return {
        power: state.power,
        message: state.message,
        volume: state.volume
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        displayNewMessage: (message) => {
            dispatch(displayMessage(message))
        },
        setNewVolume: (volume) => {
            dispatch(setVolume(volume))
        },
        turnPower: () => {
            dispatch(setPower())
        }
    }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

class AppWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Container/>
            </Provider>
        );
    }

}

// End of React-Redux Connection

export default AppWrapper;