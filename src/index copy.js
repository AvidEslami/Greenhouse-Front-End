import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import redStatus from './images/red.png';
import greyStatus from './images/grey.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from "jquery";
import "jquery/dist/jquery.slim.js";
import "bootstrap/dist/css/bootstrap.css"; 
import "bootstrap4-toggle/css/bootstrap4-toggle.min.css";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

var AlarmState1 = false;
var AlarmState2 = false;
var AlarmState3 = false;
var FirstInput = false;

class NameForm extends React.Component {

  Tester() {
    AlarmState1 = true;
    console.log(AlarmState1)
    ReactDOM.render([<NameForm />,<Alarm1Status />,<Alarm2Status />,<Alarm3Status />,<Input1 />], document.getElementById('root'));
  }
  Tester2() {
    if (AlarmState2 = true) {
      AlarmState2 = false;
      AlarmState3 = true
    } else if (AlarmState1 = true) {
      AlarmState1 = false;
      AlarmState2 = true;
    }
    ReactDOM.render([<NameForm />,<Alarm1Status />,<Alarm2Status />,<Alarm3Status />,<Input1 />], document.getElementById('root'));
  }



  render() {
    return (
      <div className="header">
        <br />
        <header>
          Alarms
        </header>

        <div id="debugging_buttons">
            <Button variant="flat" size="xxl" onClick={this.Tester}>Start Fire</Button>
            <Button variant="flat" size="xxl" onClick={this.Tester2}>Transfer Fire</Button>
          </div>

      </div>
            

    );
  }
}

class Alarm1Status extends React.Component{
  render() {
      if (AlarmState1) {
        console.log("if is running");
        return (
                <Figure>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="red"
                    src={redStatus}
                  />
                  <Figure.Caption class="caption">
                    Alarm 1
                  </Figure.Caption>
                </Figure>
        )
          } else {
            console.log("else is running");
            return (
                <Figure>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="grey"
                    src={greyStatus}
                  />
                  <Figure.Caption class="caption">
                    Alarm 1
                  </Figure.Caption>
                </Figure>

            )
          }
  }
}

class Alarm2Status extends React.Component{
  render() {
      if (AlarmState2) {
        console.log("if is running");
        return (
      // <Container alarm2>
      //       <Row>
      //         <Col></Col>
                <Figure>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="red"
                    src={redStatus}
                  />
                  <Figure.Caption class="caption">
                    Alarm 2
                  </Figure.Caption>
                </Figure>
                // </Row>
          // </Container>
        )
          } else {
            console.log("else is running");
            return (
            // <Container alarm2>
            // <Row>
                <Figure>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="grey"
                    src={greyStatus}
                  />
                  <Figure.Caption class="caption">
                    Alarm 2
                  </Figure.Caption>
                </Figure>
                
                // </Row>
         // </Container> 
            )
          }
  }
}

class Alarm3Status extends React.Component{
  render() {
      if (AlarmState3) {
        console.log("if is running");
        return (
      // <Container alarm2>
      //       <Row>
      //         <Col></Col>
                <Figure>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="red"
                    src={redStatus}
                  />
                  <Figure.Caption class="caption">
                    Alarm 3
                  </Figure.Caption>
                </Figure>
                // </Row>
          // </Container>
        )
          } else {
            console.log("else is running");
            return (
                <Figure>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="grey"
                    src={greyStatus}
                  />
                  <Figure.Caption class="caption">
                    Alarm 3
                  </Figure.Caption>
                </Figure>
            )
          }
  }
}

class Input1 extends React.Component {
  render() {
    return (
      <BootstrapSwitchButton
        checked={false}
        onlabel='ON'
        onstyle='success'
        offlabel='OFF'
        offstyle='danger'
        style='w-10 mx-2'
        onChange={(checked) => {
          this.setState({ isUserAdmin: checked })
          console.log(checked);
          FirstInput = checked;
          console.log(FirstInput);
        }}
      />
    );
  }
}




document.body.style = 'background: #04052e;';
ReactDOM.render([<NameForm />,<Alarm1Status />,<Alarm2Status />,<Alarm3Status />,<Input1 />], document.getElementById('root'));
