import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import store from "./redux/store";
import {displayMessage, setPower, setVolume} from "./redux/actions"
import * as ReactRedux from "react-redux";
import {audios, indexOfAudio} from "./constants/audios";
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
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    changeGroup() {
        this.setState((state) => ({group: state.group === 0 ? 1 : 0}))
    }

    handleVolume(e) {
        this.props.setNewVolume(e.target.value);
    }

    handlePower() {
        console.log("Power: " + this.props.power);
        this.props.turnPower();
    }

    handleKeyDown(event) {
        const index = indexOfAudio(event.key.toUpperCase());
        if(index !== -1) {
            const button = document.getElementById(audios[this.state.group][index].id);
            button.focus();
            button.click();
        }
    }

    playAudio(index) {
        if (this.props.power) {
            audios[this.state.group][index].audio.volume = this.props.volume;
            audios[this.state.group][index].audio.currentTime = 0;
            audios[this.state.group][index].audio.play();
            this.props.displayNewMessage(audios[this.state.group][index].description);
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return (
            <div className="container col-md-10">
                <div className="card card-margin">
                <div className={"row"}>
                    <div className={"col-md-8 d-flex justify-content-center"}>
                        <div id="button-grid" className={"row "}>
                            {audios[this.state.group].map((audio, index) => <DrumPad
                                key={audio.id}
                                id={audio.id}
                                label={audio.description}
                                index={index}
                                playAudio={this.playAudio}/>)}
                        </div>
                    </div>
                    <div className={"col-md-4"}>
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
const Container = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);

class AppWrapper extends React.Component {
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