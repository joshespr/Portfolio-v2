import React, { Component } from "react";
import { Bar } from "react-chartjs";
import "./style.css";

var chartOptions = 
    {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero : true,
    
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : false,
    
        //String - Colour of the grid lines
        scaleGridLineColor : "inherit",
    
        //Number - Width of the grid lines
        scaleGridLineWidth : 0,
    
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: false,
    
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: false,
    
        //Boolean - If there is a stroke on each bar
        barShowStroke : true,
    
        //Number - Pixel width of the bar stroke
        barStrokeWidth : 2,
    
        //Number - Spacing between each of the X value sets
        barValueSpacing : 5,
    
    };


class Graph extends React.Component {
  
    render() {
        return <Bar data={this.props.chartData} options={chartOptions} className="graph-custom" width="550" height="400"/>
    }
}

// data={chartData} options={chartOptions}
export default Graph;
