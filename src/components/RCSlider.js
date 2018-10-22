

import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const style = { width: 400, margin: 50 };
const marks = {
  1:'Worst',
  3: 'Mid',
  5: 'Best',
};

class RCSlider extends Component {
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
      <Slider dots min={1} max={5} marks={marks} step={1} onChange={this.handleOnChange} defaultValue={1} />
    </div>
    )
  }
}
export default RCSlider;