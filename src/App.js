import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';
import InvestSlider from './components/InvestSlider';
import ScenarioSlider from './components/ScenarioSlider';
import dataa from './testFile/sample.xlsx';
const WorstSets=[[
	[0,267.38*.001,2087.29*.001,5618.92*.001,10859.78*.001,17807.09*.001]],
	[[0,1069.50*.001,8349.18*.001,22475.67*.001,43439.10*.001,71228.35*.001]],
	[[0,2848.13*.001,22234.23*.001,59853.69*.001,115680.21*.001,189684.20*.001]],
	[[0,4746.67*.001,37055.35*.001,99751.57*.001,192791.51*.001,316125.84*.001]],
	[[0,13301.93*.001,103842.92*.001,279541.15*.001,540273.81*.001,885902.64*.001]]
];
const BestSets=[
	[[0,7001.78*.001,47418.45*.001,123354.20*.001,234806.56*.001,381772.76*.001]],
	[[0,28007.12*.001,189673.81*.001,493416.81*.001,939226.26*.001,1527091.02*.001]],
	[[0,74584.18*.001,505109.60*.001,1313990.43*.001,2501200.36*.001,4066709.79*.001]],
	[[0,124301.26*.001,841810.73*.001,2189883.61*.001,4168476.08*.001,6777538.81*.001]],
	[[0,348338.55*.001,2359068.01*.001,6136871.63*.001,11681626.57*.001,18993194.60*.001]]
];
const MidSets=[
	[[0,1564.65*.001,10944.41*.001,28657.61*.001,54701.80*.001,89074.19*.001]],
	[[0,6258.62*.001,43777.62*.001,114630.44*.001,218807.19*.001,356296.77*.001]],
	[[0,16666.98*.001,116581.71*.001,305265.84*.001,582693.07*.001,948833.79*.001]],
	[[0,27777.02*.001,194293.94*.001,508753.07*.001,971110.58*.001,1581317.13*.001]],
	[[0,77841.59*.001,544484.18*.001,1425716.08*.001,2721414.47*.001,4431441.10*.001]]
];
class App extends Component {
	constructor(props){
		super(props);
		this.updateRange= this.updateRange.bind(this);
		this.updateScenario=this.updateScenario.bind(this);
		this.state = {
			sliderValue:1,
			chartData:{
				labels: ['','1 year','2 year','3 year','4 year','5 year'],
				datasets:[{
				label:'Population1',
				data:WorstSets[0][0],
				backgroundColor:[
				  '#447DB9'
				]
				}]
			},
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
		const chartData = this.state.chartData;
		const sv=this.state.ScenarioValue;
		switch(sv){
			case 1:
				chartData.datasets=[{
					label:'Population1',
					data:WorstSets[val-1][0],
					backgroundColor:[
					  '#447DB9'
					]}];
				break;
			case 2:
				chartData.datasets=[{
					label:'Population1',
					data:MidSets[val-1][0],
					backgroundColor:[
					  '#447DB9'
					]}];
				break;
			case 3:
				chartData.datasets=[{
					label:'Population1',
					data:BestSets[val-1][0],
					backgroundColor:[
					  '#447DB9'
					]}];
				break;
			default:break;
		}
				this.setState({
				  sliderValue: val,
				  chartData: chartData
				});
    }
	setBaseData(){
		this.updateRange(1);
	}
	datasetKeyProvider(){ return Math.random(); }
  render() {
	  var stylePadding={
		  width: 600
	  }
    return (
      <div className="App" style={stylePadding}>
        <div className="">
            <h2>INVO token investment calculator</h2>
            <Chart chartData={this.state.chartData} location="1 year" legendPosition="bottom" redraw datasetKeyProvider={this.datasetKeyProvider}/>
		    <InvestSlider range={this.state.sliderValue} handle={this.updateRange}/>
			<ScenarioSlider range={this.state.ScenarioValue} handle={this.updateScenario}/>
		</div>
      </div>
    );
  }
}

export default App;
