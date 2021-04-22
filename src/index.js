import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Figure from "react-bootstrap/Figure";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alarms: {
        one: {
          class: "alert_circle_red",
          caption: "Alarm 1"
        },
        two: {
          class: "alert_circle_red",
          caption: "Alarm 2"
        },
        three: {
          class: "alert_circle_red",
          caption: "Alarm 3"
        }
      }
    };
  }

  button_one_handler = () => {
    console.log("button_one_handler");
    if (this.state.alarms.one.class==="alert_circle_red") {
    this.state.alarms.one.class = "alert_circle_green"
    } else {
      this.state.alarms.one.class = "alert_circle_red"
    }
    render_app()
  };

  button_two_handler = () => {
    console.log("button_two_handler");
    this.state.alarms.two.class = "alert_circle_green"
    render_app()
  };

  button_three_handler = () => {
    console.log("button_three_handler");
    this.state.alarms.three.class = "alert_circle_green"
    render_app()
  };

  render() {
    return (
      <div id="main">
        <section id="alerts">
          <div className="row">
            <div className="col">Alerts</div>
          </div>

          <div className="content_row">
            <div className="row">
              <div id="alarm_1" className="col text-center">
                <div className={this.state.alarms.one.class}></div>
                <div className="alert_caption">{this.state.alarms.one.caption}</div>
              </div>
              <div id="alarm_2" className="col text-center">
                <div className={this.state.alarms.two.class}></div>
                <div className="alert_caption">{this.state.alarms.two.caption}</div>
              </div>
              <div id="alarm_3" className="col text-center">
                <div className={this.state.alarms.three.class}></div>
                <div className="alert_caption">{this.state.alarms.three.caption}</div>
              </div>
            </div>
          </div>
        </section>
        <section id="inputs"></section>
        <section id="outputs"></section>

        <section id="debugging">
          <div className="btn" onClick={this.button_one_handler}>
            One
          </div>
          <div className="btn" onClick={this.button_two_handler}>
            Two
          </div>
          <div className="btn" onClick={this.button_three_handler}>
            Three
          </div>
        </section>
      </div>
    );
  }
}

const render_app = () => {
  ReactDOM.render([<Main />], document.getElementById("root"));
}

render_app()
