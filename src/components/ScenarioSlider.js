import React, {Component}  from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const style = { width: 400, margin: 50 };
const marks = {
  1:'Worst',
  2: 'Mid',
  3: 'Best',
};

class RCSlider extends Component {
 constructor(props) {
    super(props);
	this.state={
		ScenarioValue:this.props.ScenarioValue
	}
  }
 
  handleOnChange = (value) => {
	  this.setState({
		  ScenarioValue:value
	  });
	 this.props.handle(value);
  }
 
  render() {
    return (
    <div style={style}>
      <Slider dots min={1} max={3} marks={marks} step={1} onChange={this.handleOnChange} defaultValue={1} />
    </div>
    )
  }
}
export default RCSlider;