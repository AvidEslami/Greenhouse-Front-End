import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Figure from "react-bootstrap/Figure";
import "jquery/dist/jquery.slim.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap4-toggle/css/bootstrap4-toggle.min.css";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
var greenhouseData = String ;
var blower_status = String;
var obj;




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alarms: {
        one: {
          class: "alert_circle_grey",
          caption: "Main Power Failure",
        },
        two: {
          class: "alert_circle_grey",
          caption: "Hi Level Alarm",
        },
      },
      inputs: {
        one: {
          class: "input_circle_red",
          caption: "Blower On",
        },
        two: {
          class: "input_circle_red",
          caption: "Heater On",
        },
        three: {
          class: "input_circle_red",
          caption: "DeHumidifier On",
        },
        four: {
          class: "input_circle_red",
          caption: "Sump Pump On",
        },
        five: {
          class: "input_circle_red",
          caption: "Main Power On",
        },
      },
      outputs: {
        one: {},
        two: {},
      },
    };
  }

  

  

  dismiss_1 = () => {
    this.state.alarms.one.class = "alert_circle_dismissed";
    render_app();
  };
  dismiss_2 = () => {
    this.state.alarms.two.class = "alert_circle_dismissed";
    render_app();
  };

  button_one_handler = () => {
    console.log("button_one_handler");
    if (this.state.alarms.one.class === "alert_circle_red") {
      this.state.alarms.one.class = "alert_circle_grey";
    } else {
      this.state.alarms.one.class = "alert_circle_red";
    }
    render_app();
  };

  button_two_handler = () => {
    console.log("button_two_handler");
    if (this.state.alarms.two.class === "alert_circle_red") {
      this.state.alarms.two.class = "alert_circle_grey";
    } else {
      this.state.alarms.two.class = "alert_circle_red";
    }
    render_app();
  };

  button_three_handler = () => {
    console.log("button_three_handler");
    if (this.state.alarms.three.class === "alert_circle_red") {
      this.state.alarms.three.class = "alert_circle_grey";
    } else {
      this.state.alarms.three.class = "alert_circle_red";
    }
    render_app();
  };

  button_four_handler = () => {
    console.log("button_four_handler");
    if (this.state.inputs.one.class === "input_circle_red") {
      this.state.inputs.one.class = "input_circle_green";
    } else {
      this.state.inputs.one.class = "input_circle_red";
    }
    render_app();
  };

  button_five_handler = () => {
    blower_status = greenhouseData.substring(greenhouseData.indexOf("Blower") + 8, greenhouseData.indexOf("Heater") - 2);
    console.log(blower_status)
    if (blower_status === "true") {
      this.state.inputs.one.class = "input_circle_green";
    } else if (blower_status === "false") {
      this.state.inputs.one.class = "input_circle_red";
    }
    render_app();
  };

  button_five_handler = () => {
    fetch('http://192.168.1.26:5000/Inputs', { method: 'POST', body: 'blah blah'})
    render_app();
  };

  
componentDidMount() {
  this.interval = setInterval(() => this.setState(this.button_five_handler), 1000);
}
componentWillUnmount() {
  clearInterval(this.interval);
}

  render() {
    return (
      <div id="main">
        <section id="alerts">
          <div className="row">
            <div className="col">Alarms</div>
          </div>

          <div className="content_row">
            <div className="row">
              <div id="alarm_2" className="col text-center">
                <div className={this.state.alarms.one.class}></div>
                <div className="alert_caption">
                  {this.state.alarms.one.caption}
                </div>
                <div className="btn" onClick={this.dismiss_1}>
                  Dismiss
                </div>
              </div>
              <div id="alarm_3" className="col text-center">
                <div className={this.state.alarms.two.class}></div>
                <div className="alert_caption">
                  {this.state.alarms.two.caption}
                </div>
                <div className="btn" onClick={this.dismiss_2}>
                  Dismiss
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="inputs">
          <div className="row">
            <div className="col">Status</div>
          </div>
          <div className="content_row">
            <div className="row">
              <div id="Input_1" className="col text-center">
                <div className={this.state.inputs.one.class}></div>
                <div className="input_caption">
                  {this.state.inputs.one.caption}
                </div>
              </div>
              <div id="Input_1" className="col text-center">
                <div className={this.state.inputs.two.class}></div>
                <div className="input_caption">
                  {this.state.inputs.two.caption}
                </div>
              </div>
              <div id="Input_1" className="col text-center">
                <div className={this.state.inputs.three.class}></div>
                <div className="input_caption">
                  {this.state.inputs.three.caption}
                </div>
              </div>
            </div>
            <div className="row">
              <div id="Input_1" className="col text-center">
                <div className={this.state.inputs.four.class}></div>
                <div className="input_caption">
                  {this.state.inputs.four.caption}
                </div>
              </div>
              <div id="Input_1" className="col text-center">
                <div className={this.state.inputs.five.class}></div>
                <div className="input_caption">
                  {this.state.inputs.five.caption}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="outputs">
          <div className="row">
            <div className="col">Outputs</div>
          </div>
          <div className="content_row">
            <div className="row">
              <div className="col">
                <div className="text-right switch_name">Blower</div>
              </div>
              <div id="Output_1" className="col text-center">
                <div className="output_switch">
                  <BootstrapSwitchButton
                    checked1={false}
                    onlabel="ON"
                    onstyle="danger"
                    offlabel="OFF"
                    offstyle="success"
                    style="w-10"
                    onChange={(checked1) => {
                      this.setState({ isUserAdmin: checked1 });
                      console.log(checked1);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="text-right switch_name">Heater</div>
              </div>
              <div id="Output_2" className="col text-center">
                <div className="output_switch">
                  <BootstrapSwitchButton
                    checked2={false}
                    onlabel="ON"
                    onstyle="danger"
                    offlabel="OFF"
                    offstyle="success"
                    style="w-10"
                    onChange={(checked2) => {
                      this.setState({ isUserAdmin: checked2 });
                      console.log(checked2);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="text-right switch_name">DeHumidifier</div>
              </div>
              <div id="Output_3" className="col text-center">
                <div className="output_switch">
                  <BootstrapSwitchButton
                    checked3={false}
                    onlabel="ON"
                    onstyle="danger"
                    offlabel="OFF"
                    offstyle="success"
                    style="w-10"
                    onChange={(checked3) => {
                      this.setState({ isUserAdmin: checked3 });
                      console.log(checked3);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="text-right switch_name">Sump Pump</div>
              </div>
              <div id="Output_4" className="col text-center">
                <div className="output_switch">
                  <BootstrapSwitchButton
                    checked4={false}
                    onlabel="ON"
                    onstyle="danger"
                    offlabel="OFF"
                    offstyle="success"
                    style="w-10"
                    onChange={(checked4) => {
                      this.setState({ isUserAdmin: checked4 });
                      console.log(checked4);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section> 
        <section id="debugging">
          <div className="btn" onClick={this.button_one_handler}>
            Alarm One
          </div>
          <div className="btn" onClick={this.button_two_handler}>
            Alarm Two
          </div>
          <div className="btn" onClick={this.button_four_handler}>
            Blower On/Off
          </div>
          <div className="btn" onClick={this.button_five_handler}>
            refreshPage
          </div>
          <div className="btn" onClick={this.button_six_handler}>
            Test an Input
          </div>
        </section>
      </div>
    );
  }
}


document.body.style = "background: #04052e;";
const render_app = () => {
  fetch('http://192.168.1.26:5000/')
  .then(res => res.json())
  .then(data => obj = data)
  //.then(() => console.log(obj))
  greenhouseData = JSON.stringify(obj)
  console.log(greenhouseData)
  ReactDOM.render([<Main />], document.getElementById("root"));
}

// function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }
// render_app();
// sleep(30000)
render_app();
greenhouseData = '[{"Blower":false,"Heater":false}]';
console.log(greenhouseData);