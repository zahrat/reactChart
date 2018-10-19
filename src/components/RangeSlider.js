import React, {Component} from 'react';
// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider'

// To include the default styles
import 'react-rangeslider/lib/index.css'
import App from '../App';

class VolumeSlider extends Component {
 constructor(props) {
    super(props)
    this.state = {
      volume: props.range
    }
  }
 
  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
	this.props.action(value)
  }
 
  render() {
    let { volume } = this.state
    return (
      <Slider
		  min={0}
		  max={58}
		  step={1}
		  value={volume}
          orientation="horizontal"
		  onChange={this.handleOnChange}
      />
    )
  }
}
export default VolumeSlider;