import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../../assets/lotties/109028-react-and-node-development-mobile-first.json'
 
export default class SkillsLottie extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }
 
  render() { 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return <div>
      <Lottie options={defaultOptions}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
    </div>
  }
}