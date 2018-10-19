import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
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
								ticks : {
									max : 100,    
									min : 0
								}
							}]
						}
					}}
				/>
	</div>
	)}
}
export default Chart;