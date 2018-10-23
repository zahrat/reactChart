import React, {Component}  from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const style = { width: 400, margin: 50 };
const marks = {
  1:'$4.9k',
  2: '$19k',
  3: '$49k',
  4:'$79k',
  5:'$199k'
};

class VolumeSlider extends Component {
 constructor(props) {
    super(props)
  }
 
  handleOnChange = (value) => {
	 this.props.handle(value)
  }
 
  render() {
    return (
      
    <div style={style}>
      <Slider dots min={1} max={5} marks={marks} step={1} onChange={this.handleOnChange} defaultValue={1} />
    </div>
    )
  }
}
export default VolumeSlider;