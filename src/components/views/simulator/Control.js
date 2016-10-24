import React from 'react';
import './control.css';

const play = 'start fa fa-play-circle fa-2x';

const pause = 'fa fa-pause-circle fa-2x';

var active = false;

var speed = 4;

//onWheel={console.log('wheel')}
export class Control extends React.Component{



  render() {
      return(
        <div className="simcontrol">
          <div
            className={"start" + active ? play : pause}
            onClick={this.props.simstart}></div>
          <div
            className={"speed"}
            onClick={() => this.props.simadjustspeed(speed)}>
              <i className="fa fa-circle-o-notch fa-2x fa-stack-1x"/>
              <i className="speedtext fa-stack-2x">{speed}</i>
            </div>
        </div>
      );
      }
}
