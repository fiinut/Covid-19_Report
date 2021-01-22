import React, { Component} from 'react';
import { DynamicBarChart } from 'react-dynamic-charts';
import 'react-dynamic-charts/dist/index.css';
import axios from 'axios';

export default class Chart extends Component {
  state = {
    covid19: [],
    dataCovid: [
      {
        "values": [
          {
            "id": 1,
            "label": "Afghanistan",
            "value": 54559,
            "color": ""
          },
          {
            "id": 2,
            "label": "Test 2",
            "value": 69916,
            "color": ""
          }
        ]
      }
    ],
  };
  componentDidMount() {
    axios.get('https://disease.sh/v3/covid-19/countries?sort=cases').then(res => {
      const dataCovid19 = res.data;
      const values = []
      const covid19 = []
      var i = 1
      dataCovid19.forEach(e => {
        if(values.length < 5){
          values.push({
            id: i,
            label: e.country,
            value: e.cases,
            color: ""
          })
        }
        i++
      })
      covid19.push({
        values
      })
      this.setState({ covid19 });
      console.log(this.state.dataCovid)
      console.log(this.state.covid19)
    })
  }
  render () {
    return (
      <DynamicBarChart
        data={this.state.covid19}
      />
      // <p>{ this.state.covid19 }</p>
    )
  }
}