import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import VolumeSlider from './components/RangeSlider';
import CSVReader from 'react-csv-reader';

class App extends Component {
	constructor(props){
		super(props);
		this.updateRange= this.updateRange.bind(this);
		this.handleForce= this.handleForce.bind(this);
		this.state = {
			sliderValue:5,
			chartData:{},
			chartData1:{}
		}
	}
		componentWillMount(){
    this.getChartData();
}
	updateRange(val) {
		const chartData = this.state.chartData;
		const chartData1=this.state.chartData1;
		console.log(chartData1);
		console.log(chartData.datasets[0].data[0]);
		chartData.datasets = [
			  {
				label:'Population',
				data:[
				  val*chartData1.datasets[0].data[0],
				  (val)*chartData1.datasets[0].data[1],
				  (val)*chartData1.datasets[0].data[2],
				  (val)*chartData1.datasets[0].data[3],
				  (val)*chartData1.datasets[0].data[4],
				  (val)*chartData1.datasets[0].data[5]
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
    }

	getChartData(){
    // Ajax calls here
		this.setState({
		  chartData:{
					  }
		});
	}
	handleForce(arr,name){
		const chartData = this.state.chartData;
		const charTemp=this.state.chartData1;
		charTemp.datasets=[{
			label:'population',
			data:arr[1]
		}];
		chartData.labels = arr[0];
		chartData.datasets = [{
				label:'population',
				data:arr[1],
				backgroundColor:[
				  'red'
				]
			}];
		this.setState({
		  chartData: chartData,
		  chartData1:charTemp
		});
		console.log(this.state.sliderValue);
		console.log(arr[0]);	
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
			<CSVReader
				cssClass="csv-input"
				label="Select CSV with secret Death Star statistics"
				onFileLoaded={this.handleForce}
				onError={this.handleDarkSideForce}
				inputId="ObiWan"
				inputStyle={{color: 'red'}}
			/>
		</div>
      </div>
    );
  }
}

export default App;
