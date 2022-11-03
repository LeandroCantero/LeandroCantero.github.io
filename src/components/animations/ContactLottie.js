import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../../assets/lotties/contact.json'

export default class SkillsLottie extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        className: "lottie-svg-class",
        id: "lottie-svg-id"
      }
    };

    return <div>
      <Lottie options={defaultOptions}
        height={300}
        width={300}
        isStopped={this.state.isStopped}
        isPaused={this.state.isPaused} />
    </div>
  }
}