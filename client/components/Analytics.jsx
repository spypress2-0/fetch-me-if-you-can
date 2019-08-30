import React, { Component } from "react";
import { connect } from "react-redux"; //Will need to use mapStateToProps & mapDispatchToProps

import Chart from "chart.js";

const mapStateToProps = store => ({});

//Initialize method for props to use;
const mapDispatchToProps = dispatch => ({});

class Analytics extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const ctx = document.querySelector("#myChart");
        const myLineChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["200", "404"],
                datasets: [{
                    label: "Population (millions)",
                    backgroundColor: ["#65d665", "#ff7a7a"],
                    data: [2, 1]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Server Activity'
                }
            }
        });
    }

    render() {
        return (
            <div>
                <div><canvas id="myChart"></canvas></div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
