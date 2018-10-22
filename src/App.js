import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';
import VolumeSlider from './components/RangeSlider';
import RCSlider from './components/RCSlider';

class App extends Component {
	constructor(props){
		super(props);
		this.updateRange= this.updateRange.bind(this);
		this.updateScenario=this.updateScenario.bind(this);
		this.state = {
			sliderValue:5,
			chartData:{},
			baseData:{},
			ScenarioValue:1
		}
	}
	componentWillMount(){
		this.setBaseData();
	}
	updateScenario(val){
		
		this.setState({
		  ScenarioValue: val
		});
		this.updateRange(this.state.sliderValue);
	}
	updateRange(val) {
		//console.log(val);
		const chartData = this.state.chartData;
		const baseData = this.state.baseData;
		chartData.datasets = [
			  {
				label:'Population',
				data:[
				  val*baseData.datasets[0].data[0]+this.state.ScenarioValue*20,
				  (val)*baseData.datasets[0].data[1]+this.state.ScenarioValue*20,
				  (val)*baseData.datasets[0].data[2]+this.state.ScenarioValue*20,
				  (val)*baseData.datasets[0].data[3]+this.state.ScenarioValue*20,
				  (val)*baseData.datasets[0].data[4]+this.state.ScenarioValue*20
				],
				backgroundColor:[
				  '#447DFF'
				]
			  },
			  {
				label:'Population1',
				data:[
				  val*baseData.datasets[1].data[0]+this.state.ScenarioValue*20,
				  (val)*baseData.datasets[1].data[1]+this.state.ScenarioValue*20,
				  (val)*baseData.datasets[1].data[2]+this.state.ScenarioValue*20,
				  (val)*baseData.datasets[1].data[3]+this.state.ScenarioValue*20,
				  (val)*baseData.datasets[1].data[4]+this.state.ScenarioValue*20
				],
				backgroundColor:[
				  '#447DB9'
				]
			  },
			  {
				label:'Population2',
				data:[
				  val*baseData.datasets[2].data[0]+this.state.ScenarioValue*20,
				  (val)*baseData.datasets[2].data[1]+this.state.ScenarioValue*20,
				  (val)*baseData.datasets[2].data[2]+this.state.ScenarioValue*20,
				  (val)*baseData.datasets[2].data[3]+this.state.ScenarioValue*20,
				  (val)*baseData.datasets[2].data[4]+this.state.ScenarioValue*20
				],
				backgroundColor:[
				  '#65BFC7'
				]
			  }
			];
		this.setState({
		  sliderValue: val,
		  chartData: chartData
		});
    }
	setBaseData(){
		this.setState({
			baseData:{
			labels: ['1 year','2 year','3 year','4 year','5 year'],
			datasets:[
			  {
				label:'Population',
				data:[
				  0,20,40,50,70
				],
				backgroundColor:[
				  '#447DFF'
				]
			  },
			  {
				label:'Population1',
				data:[
				  0,30,50,70,120
				],
				backgroundColor:[
				  '#447DB9'
				]
			  },
			  {
				label:'Population2',
				data:[
				  0,50,70,110,190
				],
				backgroundColor:[
				  '#65BFC7'
				]
			  }
			]
		  },
		  chartData:{
			labels: ['1 year','2 year','3 year','4 year','5 year'],
			datasets:[
			  {
				label:'Population',
				data:[
				  0,20,40,50,70
				],
				backgroundColor:[
				  '#447DFF'
				]
			  },
			  {
				label:'Population1',
				data:[
				  0,30,50,70,120
				],
				backgroundColor:[
				  '#447DB9'
				]
			  },
			  {
				label:'Population2',
				data:[
				  0,50,70,110,190
				],
				backgroundColor:[
				  '#65BFC7'
				]
			  }
			]
		  }
		});
	}
	getChartData(){
    // Ajax calls here
	}
	datasetKeyProvider(){ return Math.random(); }
  render() {
	  var stylePadding={
		  width: 600
	  }
    return (
      <div className="App" style={stylePadding}>
        <div className="">
            <h2>Welcome to React</h2>
            <Chart chartData={this.state.chartData} location="1 year" legendPosition="bottom" redraw datasetKeyProvider={this.datasetKeyProvider}/>
		    <VolumeSlider range={this.state.sliderValue} handle={this.updateRange}/>
			<RCSlider range={this.state.ScenarioValue} handle={this.updateScenario}/>
		</div>
      </div>
    );
  }
}

export default App;
