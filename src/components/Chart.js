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
    displayLegend: false,
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
								display: true
							}],
							xAxes:[{
							  gridLines: {
								display: false,
							  }
							}]
						}
					}}
				/>
	</div>
	)}
}
export default Chart;