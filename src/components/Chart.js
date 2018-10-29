import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
class Chart extends Component{
	constructor(props){
		super(props);
		this.state={
			chartData:props.chartData
		}
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
						  text:'Largest Cities In Massachusetts',
						  fontSize:25
						},
						legend:{
						  display:this.props.displayLegend,
						  position:this.props.legendPosition
						},scales: {
							yAxes : [{
								display: true,
								ticks: {
									// Include a dollar sign in the ticks
									callback: function(value, index, values) {
										if(value<1000000)
										return '$' + (value*.001)+'k';
										else return '$'+(value*.000001)+'M';
									}
								}
							}],
							xAxes:[{
							  gridLines: {
								display: false,
							  }
							}]
						},tooltips: {
							callbacks: {
							label: function(tooltipItem,data) {
								console.log(data);
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