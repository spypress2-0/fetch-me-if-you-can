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
                labels: ["404", "200", "500", "300"],
                datasets: [{
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
                    data: [2478, 5267, 734, 784]
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
