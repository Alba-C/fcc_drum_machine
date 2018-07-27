import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPressed: "",
      message: "show message",
      sound: "",
      showMessage: true,
      keyDown: false,
      drumKeys: [
        {
          keyPressed: "Q",
          message: "Kick-Drum",
          sound:
            "http://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Choosy%20House%20Kit/67[kb]choosy-house-Kick17.wav.mp3"
        },
        {
          keyPressed: "W",
          message: "Space-Kick",
          sound:
            "http://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Hip%20Hop%20Specialty%20Kit/296[kb]say-bow-beep.wav.mp3"
        },
        {
          keyPressed: "E",
          message: "Clap",
          sound:
            "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/claps/13[kb]707_HCP.WAV.mp3"
        },
        {
          keyPressed: "A",
          message: "Rim-Shot",
          sound: "http://s1download-universal-soundbank.com/wav/4392.wav"
        },
        {
          keyPressed: "S",
          message: "High-Hat",
          sound:
            "http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Dirty%20South%20Hihat%2001-3615-Free-Loops.com.mp3"
        },
        {
          keyPressed: "D",
          message: "Crash",
          sound:
            "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/crashes/92[kb]909-bright-crash.aif.mp3"
        },
        {
          keyPressed: "Z",
          message: "Laser",
          sound:
            "http://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/R2D2-droid/41[kb]R2D2-disappointment.aif.mp3"
        },
        {
          keyPressed: "X",
          message: "R2D2",
          sound:
            "http://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/R2D2-droid/52[kb]R2D2-datapath.aif.mp3"
        },
        {
          keyPressed: "C",
          message: "Scratch",
          sound:
            "http://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/turntables%20and%20scratching/48[kb]basic-scratch.aif.mp3"
        }
      ]
    };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.playAudio = this.playAudio.bind(this);
  }
  playAudio(key) {
    const audio = document.getElementById(key);
    audio.play();
  }

  handleClick(event) {
    console.log(event.currentTarget.value, event.currentTarget);
    const keyID = event.currentTarget.value;
    const audio = document.getElementById(keyID);

    this.setState({ showMessage: true });
    this.playAudio(keyID);
    this.setState({ showMessage: true });
    // var e = new Event("keydown");
    // e.key = event.target.id;
    // document.dispatchEvent(e);
  }
  onKeyDown(event) {
    this.setState({
      keyPressed: "",
      message: "",
      sound: "",
      showMessage: true,
      keyDown: false
    });

    switch (event.keyCode) {
      case 81:
        return this.setState({
          keyPressed: "Q",
          message: "Kick Drum",
          sound:
            "http://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Choosy%20House%20Kit/67[kb]choosy-house-Kick17.wav.mp3 "
        });
      case 87:
        return this.setState({
          keyPressed: "W",
          message: " Space Kick",
          sound:
            "http://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Hip%20Hop%20Specialty%20Kit/296[kb]say-bow-beep.wav.mp3"
        });
      case 69:
        return this.setState({
          keyPressed: "E",
          message: " E Clap",
          sound:
            "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/claps/13[kb]707_HCP.WAV.mp3"
        });
      case 65:
        return this.setState({
          keyPressed: "A",
          message: " A Rim Shot",
          sound: "http://s1download-universal-soundbank.com/wav/4392.wav"
        });
      case 83:
        return this.setState({
          keyPressed: "S",
          message: " S High Hat",
          sound:
            "http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Dirty%20South%20Hihat%2001-3615-Free-Loops.com.mp3"
        });
      case 68:
        return this.setState({
          keyPressed: "D",
          message: " D Crash",
          sound:
            "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/crashes/92[kb]909-bright-crash.aif.mp3"
        });
      case 90:
        return this.setState({
          keyPressed: "Z",
          message: " Z Laser",
          sound:
            "http://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/R2D2-droid/41[kb]R2D2-disappointment.aif.mp3"
        });
      case 88:
        return this.setState({
          keyPressed: "X",
          message: " X R2D2",
          sound:
            "http://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/R2D2-droid/52[kb]R2D2-datapath.aif.mp3"
        });
      case 67:
        return this.setState({
          keyPressed: "C",
          message: " C Scratch",
          sound:
            "http://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/turntables%20and%20scratching/48[kb]basic-scratch.aif.mp3"
        });
      default:
        return console.log("some other key");
    }
  }

  onKeyUp() {
    this.setState({ keyDown: false });
    setTimeout(() => {
      !this.state.keyDown && this.setState({ showMessage: false, message: "" });
    }, 750);
  }

  componentDidMount() {
    window.addEventListener("keydown", event => {
      this.onKeyDown(event);
    });
    window.addEventListener("keyup", event => {
      this.onKeyUp(event);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keydown");
    window.removeEventListener("keyup");
  }
  render() {
    return (
      <div className="wrapper">
        <div className="top">
          <div className="woodSide" id="top-Left" />
          <div id="top-Middle" />
          <div className="woodSide" id="top-Right" />
        </div>
        <div className="App" id="drum-machine">
          <div className="woodSide" />
          <DrumSet
            drumKeys={this.state.drumKeys}
            message={this.state.message}
            handleClick={this.handleClick}
          />
          <Display
            keyPressed={this.state.keyPressed}
            showMessage={this.state.showMessage}
            message={this.state.message}
            sound={this.state.sound}
          />
          <div className="woodSide" />
        </div>
        <Footer />
      </div>
    );
  }
}

class Screws extends Component {
  render() {
    return (
      <div className="screwWrapper">
        <div className="screw" id="screw1" />
        <div className="screw" id="screw2" />
      </div>
    );
  }
}

class DrumSet extends Component {
  render() {
    const drumKeys = this.props.drumKeys;

    return (
      <div className="drumWrapper">
        <Screws />
        <div className="drum-set">
          {drumKeys.map(drum => (
            <button
              className="drum-pad"
              key={drum.keyPressed}
              id={drum.message}
              onClick={this.props.handleClick}
              value={drum.keyPressed}
            >
              <div>
                <p className="buttonLetter">{drum.keyPressed}</p>
                {/* <p className="keyMsg">{drum.message}</p> */}
                <audio
                  autoPlay="true"
                  id={drum.keyPressed}
                  className="clip"
                  src={drum.sound}
                >
                  {/* <source src={drum.sound} /> */}
                </audio>
              </div>
            </button>
          ))}
        </div>
        <Screws />
      </div>
    );
  }
}

class Display extends Component {
  playSound(key) {
    return (
      // console.log("soundPlayed", key);
      <audio controls autoPlay="true">
        {/* console.log(object) */}
        <source src="{key.drumKeys.sound}" />
      </audio>
    );
  }

  componentWillReceiveProps = nextProps => {
    let fadeText = "notFaded";
    //  console.log(nextProps);
  };

  render() {
    let keyPressed = this.props.keyPressed;
    let showMessage = this.props.showMessage;

    let sound = (
      <audio autoPlay="true">
        {/* console.log(soundfile) */}
        <source src={this.props.sound} />
      </audio>
    );

    const padPressed = this.props.keyPressed;
    const soundPressed = this.props.message;

    return (
      <div id="display-Side">
        <Screws />
        <p className="label">FCC :|: DrumMachine :|:</p>
        <div id="display">
          {/* <p className="display-text">{soundPressed}</p> */}
          {{ showMessage } && (
            <div className="display-text">{soundPressed}</div>
          )}
        </div>
        {/* {keyPressed && <div> {sound}</div>} */}
        <Screws />
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="socialLinks">
          <a href="https://github.com/REAOrlando">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/christopheralbanesefl/">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://twitter.com/albanesechris">
            <i className="fab fa-twitter" />
          </a>
        </div>

        <p>© Christopher Albanese 2018</p>
      </div>
    );
  }
}

export default App;
