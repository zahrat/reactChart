

import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const style = { width: 400, margin: 50 };
const marks = {
  1:'$1k',
  50: '$50k',
  100: '$100k',
};

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
	 this.props.handle(value)
  }
 
  render() {
    let { volume } = this.state
    return (
      
    <div style={style}>
      <Slider dots min={1} max={100} marks={marks} step={25} onChange={this.handleOnChange} defaultValue={1} />
    </div>
    )
  }
}
export default VolumeSlider;