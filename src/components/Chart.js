import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
class Chart extends Component{
	constructor(props){
		super(props);
		this.state={
			chartData:props.chartData
		}
	console.log(this.props.maxx);
	}
	static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
}
	render (){ 
	return(
	<div className="chart">
		<Line
		datasetKeyProvider={this.props.datasetKeyProvider}
					data={this.state.chartData}
					options={{
						title:{
						  s:this.props.displayTitle,
						  fontSize:25
						},
						legend:{
						  display:this.props.displayLegend,
						  position:this.props.legendPosition
						},scales: {
							yAxes : [{
								display: true,
                                stacked: true,
								type: 'logarithmic',
								ticks: {
									// Include a dollar sign in the ticks
									callback: function(value, index, values) {
										if(value<1000)
											return '$' + parseFloat(value).toFixed(2);
										else if(value<1000000)
										return '$' + parseFloat(value*.001).toFixed(2)+'k';
										else return '$'+parseFloat(value*.000001).toFixed(2)+'M';
									},max:this.props.maxx*10,beginAtZero: true
								},
								afterBuildTicks: function (chartObj) { //Build ticks labelling as per your need
								let maxchartval=chartObj.ticks[0];
								console.log(maxchartval);
									chartObj.ticks = [];
									let l=0;
									for(let i=0;l<=maxchartval;i++){
										chartObj.ticks.push(Math.pow(10,i));
										l=Math.pow(10,i);
									}
								},
								scaleLabel: {
									display: false
								}
							}],
							xAxes:[{
							  gridLines: {
								display: false,
							  }
							}]
						},tooltips: {
							custom: function(tooltip) {
								if (!tooltip) return;
								// disable displaying the color box;
								tooltip.displayColors = false;
							  },
							callbacks: {
							label: function(tooltipItem,data) {
								console.log(tooltipItem);
								return 'ROI: '+parseFloat(Math.round((tooltipItem.yLabel/data.datasets[0].invest)*100*100) / 100).toFixed(2)+'%';
							}
						  }
						}
					}}
				/>
	</div>
	)}
}
export default Chart;