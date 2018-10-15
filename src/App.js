import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
	constructor(){
		super();
		this.state = {
			chartData:{}
		}
	}
	componentWillMount(){
    this.getChartData();
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
				  617594,
				  181045,
				  153060,
				  106519,
				  105162,
				  95072
				],
				backgroundColor:[
				  'red'
				]
			  },
			  {
				label:'set2',
				data:[
				  917594,
				  381045,
				  353060,
				  206519,
				  205162,
				  15072
				],
				backgroundColor:[
				  'green'
				]
			  }
			]
		  }
		});
	}
  render() {
    return (
      <div className="App">
        <div className="">
           <h2>Welcome to React</h2>
          <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
        </div>
      </div>
    );
  }
}

export default App;
