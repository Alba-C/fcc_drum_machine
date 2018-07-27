import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPressed: "",
      message: "",
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
    console.log(key[0]);

    const audio = document.getElementById(key);
    console.log("audio = " + audio);
    audio.currentTime = 0;
    audio.play();
    const msg = this.state.drumKeys[this.findInDrumKeys(key)].message;
    this.setState({ message: msg });
  }

  findInDrumKeys(keyID) {
    let ind = "";
    this.state.drumKeys.map((key, index) => {
      if (key.keyPressed === keyID) {
        ind = index;
      }
    });
    return ind;
  }

  handleClick(event) {
    console.log(event.currentTarget.value, event.currentTarget);
    const keyID = event.currentTarget.value;
    this.setState({ showMessage: true });
    this.playAudio(keyID);
  }

  onKeyUp() {
    this.setState({ keyDown: false });
    setTimeout(() => {
      !this.state.keyDown && this.setState({ showMessage: false, message: "" });
    }, 750);
  }

  onMouseUp() {
    this.setState({ keyDown: false });
    setTimeout(() => {
      !this.state.keyDown && this.setState({ showMessage: false, message: "" });
    }, 750);
  }

  onKeyDown(event) {
    this.setState({
      showMessage: true,
      keyDown: false
    });

    switch (event.keyCode) {
      case 81:
        return this.playAudio("Q");
      case 87:
        return this.playAudio("W");
      case 69:
        return this.playAudio("E");
      case 65:
        return this.playAudio("A");
      case 83:
        return this.playAudio("S");
      case 68:
        return this.playAudio("D");
      case 90:
        return this.playAudio("Z");
      case 88:
        return this.playAudio("X");
      case 67:
        return this.playAudio("C");
      default:
        return console.log("some other key");
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", event => {
      this.onKeyDown(event);
    });
    window.addEventListener("keyup", event => {
      this.onKeyUp(event);
    });
    window.addEventListener("mouseup", event => {
      this.onMouseUp(event);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keydown");
    window.removeEventListener("keyup");
    window.removeEventListener("mouseup");
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
            <div className="pad-container">
              <button
                className="drum-pad"
                key={drum.keyPressed}
                id={drum.message}
                onClick={this.props.handleClick}
                value={drum.keyPressed}
              >
                <div>
                  <p className="buttonLetter">{drum.keyPressed}</p>

                  <audio
                    id={drum.keyPressed}
                    className="clip"
                    src={drum.sound}
                    preload="true"
                  />
                </div>
              </button>
              <p className="keyMsg">{drum.message}</p>
            </div>
          ))}
        </div>
        <Screws />
      </div>
    );
  }
}

class Display extends Component {
  render() {
    let showMessage = this.props.showMessage;
    const soundPressed = this.props.message;

    return (
      <div id="display-Side">
        <Screws />
        <p className="label">FCC :|: DrumMachine :|:</p>
        <div id="display">
          {{ showMessage } && (
            <div className="display-text">{soundPressed}</div>
          )}
        </div>
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

        <div className="photoCredits">
          <p>
            Woodgrain photo by{" "}
            <a
              href="https://unsplash.com/photos/8mDJ31rIg08?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
            >
              rawpixel
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/search/photos/woodgrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
            >
              Unsplash
            </a>.
          </p>

          <p>
            Background photo by{" "}
            <a
              href="https://unsplash.com/photos/oBb-Y26PJgg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
            >
              Samuel Zeller
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/search/photos/texture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
            >
              Unsplash
            </a>.
          </p>

          <p>
            Pad texture photo by{" "}
            <a
              href="https://unsplash.com/photos/fcZIyU-nbFE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
            >
              Nathan Anderson
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/search/photos/texture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
            >
              Unsplash
            </a>.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
