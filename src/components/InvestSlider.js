import React, {Component}  from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const style = { width: 500, margin: 50 };
const marks = {
  1:'$4.9k',
  2: '$19k',
  3: '$49k',
  4:'$79k',
  5:'$199k'
};
const API = 'https://sheets.googleapis.com/v4/spreadsheets/176E8o0qhfHVTjYIwuk5kAWNggYOD526d4HBqTegJ4zM/values:batchGet?'+
'ranges=Investment!C3:C7&valueRenderOption=UNFORMATTED_VALUE&majorDimension=ROWS&key=AIzaSyBhw79t2J0aRVOT2a0P0-Jh81TvwhK0VMI';
class VolumeSlider extends Component {
 constructor(props) {
    super(props);
	this.state={
			sliderValue:this.props.sliderValue		
	}
  }
  componentDidMount(){
		this.setDatsets();
	}
 setDatsets(){
     fetch(API).then(response => response.json()).then(data => {
      let baseInvestments = data.valueRanges[0].values;
	  marks[1]='$'+baseInvestments[0]*.001+'k';
	  marks[2]='$'+baseInvestments[1]*.001+'k';
	  marks[3]='$'+baseInvestments[2]*.001+'k';
	  marks[4]='$'+baseInvestments[3]*.001+'k';
	  marks[5]='$'+baseInvestments[4]*.001+'k';	
	});
 }
  handleOnChange = (value) => {
	  this.setState({sliderValue:value});
	 this.props.handle(value)
  }
 
  render() {
    return (
      
    <div style={style}>
  <Slider dots min={1} max={5} marks={marks} step={1} dotStyle={{height:70},{width:20}} onChange={this.handleOnChange} defaultValue={1} />
    </div>
    )
  }
}
export default VolumeSlider;