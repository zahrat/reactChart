import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';
import InvestSlider from './components/InvestSlider';
const API = 'https://sheets.googleapis.com/v4/spreadsheets/176E8o0qhfHVTjYIwuk5kAWNggYOD526d4HBqTegJ4zM/values:batchGet?'+
'ranges=Investment!C3:C7&ranges=Worst!F12:V12&'+//for base investments & worst data
'ranges=Worst!F17:V17&ranges=Worst!F22:V22&ranges=Worst!F27:V27&ranges=Worst!F32:V32&'+
'ranges=Mid!F12:V12&ranges=Mid!F17:V17&ranges=Mid!F22:V22&ranges=Mid!F27:V27&ranges=Mid!F32:V32&'+
'ranges=Best!F12:V12&ranges=Best!F17:V17&ranges=Best!F22:V22&ranges=Best!F27:V27&ranges=Best!F32:V32&'+
'valueRenderOption=UNFORMATTED_VALUE&majorDimension=ROWS&key=AIzaSyBhw79t2J0aRVOT2a0P0-Jh81TvwhK0VMI';
class App extends Component {
	constructor(props){
		super(props);
		this.updateRange= this.updateRange.bind(this);
		this.state = {
			sliderValue:1,
			ScenarioValue:1,
			baseInvestmet:{data:[0,0,0,0,0]},
			maxVal:1,
			chartData:{
				labels: ['','1 year','2 year','3 year','4 year','5 year'],
				datasets:[{
				invest:'x',
				label:'Worst',
				data:[],
				backgroundColor:[
				  '#464E99'
				]
				},{
				label:'Mid',
				data:{},
				backgroundColor:[
				  '#A9812F'
				]
				},{
				label:'Best',
				data:[],
				backgroundColor:[
				  '#1E967A'
				]
				}]
			},
			 WorstSets:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
			 MidSets:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
			 BestSets:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
		}
	}
	setDatsets(){
     fetch(API).then(response => response.json()).then(data => {
	  const worstData=this.state.WorstSets;
	  const midData=this.state.MidSets;
	  const bestData=this.state.BestSets;
	  for(let i=0;i<3;i++){
		  for(let j=0;j<5;j++){
			  var temp=data.valueRanges[(i*5)+(j+1)].values[0];
			  switch (i){
				  case 0:
					worstData[j][1]=temp[0];
					worstData[j][2]=temp[4];
					worstData[j][3]=temp[8];
					worstData[j][4]=temp[12];
					worstData[j][5]=temp[16];
				  break;
				  case 1:
					midData[j][1]=temp[0];
					midData[j][2]=temp[4];
					midData[j][3]=temp[8];
					midData[j][4]=temp[12];
					midData[j][5]=temp[16];
				  break;
				  case 2:
					bestData[j][1]=temp[0];
					bestData[j][2]=temp[4];
					bestData[j][3]=temp[8];
					bestData[j][4]=temp[12];
					bestData[j][5]=temp[16];
				  break;
			  }
		  }
	  }
	  let tempMax=(parseFloat(Math.round(bestData[0][5] * 100) / 100).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	  
		const tempBase=this.state.baseInvestmet;
		for(let i=0;i<data.valueRanges[0].values.length;i++){
		tempBase.data[i]=(data.valueRanges[0].values[i]);}
		this.setState({ 
			baseInvestmet:tempBase,
			WorstSets:worstData,
			MidSets:midData,
			BestSets:bestData,
			maxVal:tempMax});
		}).then(()=>this.updateRange(1));
		//this.updateRange(1);		
	}
	componentDidMount(){
		this.setDatsets();
	}
	updateRange(val) {
		const chartData = this.state.chartData;
		console.log('update range',this.state.baseInvestmet.data[val-1]);
		chartData.datasets[0].data=this.state.WorstSets[val-1];
		chartData.datasets[0].invest=this.state.baseInvestmet.data[val-1];
		chartData.datasets[1].data=this.state.MidSets[val-1];
		chartData.datasets[2].data=this.state.BestSets[val-1];
	  let tempMax=(parseFloat(Math.round(chartData.datasets[2].data[5] * 100) / 100).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		this.setState({
		  sliderValue: val,
		  chartData: chartData,
		  maxVal:tempMax
		});
    }
	datasetKeyProvider(){ return Math.random(); }
  render() {
	  var stylePadding={
		  width: 600
	  }
    return (
      <div className="App" style={stylePadding}>
        <div className="">
            <h2 >Total portfolio value: ${this.state.maxVal}</h2>
            <Chart chartData={this.state.chartData} sidebarVal={this.state.baseInvestmet} location="1 year" legendPosition="bottom" redraw datasetKeyProvider={this.datasetKeyProvider}/>
		    <InvestSlider range={this.state.sliderValue} handle={this.updateRange}/>
		</div>
      </div>
    );
  }
}

export default App;
