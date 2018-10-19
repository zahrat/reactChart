import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import VolumeSlider from './components/RangeSlider';

class App extends Component {
	constructor(props){
		super(props);
		this.updateRange= this.updateRange.bind(this);
		this.state = {
			sliderValue:5,
			chartData:{}
		}
	}
		componentWillMount(){
    this.getChartData();
}
	updateRange(val) {
		const chartData = this.state.chartData;
		chartData.datasets = [
			  {
				label:'Population',
				data:[
				  val,
				  (val)*2,
				  (val)*3,
				  (val)*3,
				  (val)*4,
				  (val)*5
				],
				backgroundColor:[
				  'blue'
				]
			  },{
				label:'Population2',
				data:[
				  val,
				  val*1,
				  val*5,
				  val*5,
				  val*5,
				  val*5
				],
				backgroundColor:[
				  'red'
				]
			  }
			]
		this.setState({
		  sliderValue: val,
		  chartData: chartData
		});
		console.log(this.state.sliderValue);
    }

	getChartData(){
    // Ajax calls here
		this.setState({
		  chartData:{
			labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
			datasets:[
			  {
				label:'Population',
				data:[
				  this.state.sliderValue,
				  (this.state.sliderValue)*2,
				  (this.state.sliderValue)*3,
				  (this.state.sliderValue)*3,
				  (this.state.sliderValue)*4,
				  (this.state.sliderValue)*5
				],
				backgroundColor:[
				  'blue'
				]
			  },{
				label:'Population2',
				data:[
				  this.state.sliderValue,
				  (this.state.sliderValue)*1,
				  (this.state.sliderValue)*5,
				  (this.state.sliderValue)*5,
				  (this.state.sliderValue)*5,
				  (this.state.sliderValue)*5
				],
				backgroundColor:[
				  'red'
				]
			  }
			]
		  }
		});
	}
  render() {
	  var stylePadding={
		  width: 600
	  }
    return (
      <div className="App" style={stylePadding}>
        <div className="">
           <h2>Welcome to React</h2>
          <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" redraw/>
		  <VolumeSlider range={this.state.sliderValue} action={this.updateRange}/>
        </div>
      </div>
    );
  }
}

export default App;
