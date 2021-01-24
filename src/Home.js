import React, { Component} from 'react';
import axios from 'axios';
import Chart from './Chart';

export default class Home extends Component {
  state = {
    covid19: [],
  };
  componentDidMount() {
    this.getCovidData()
  }
  getCovidData() {
    var url = 'https://disease.sh/v3/covid-19/countries?sort=cases'
    axios.get(url).then(res => {
      const dataCovid19 = res.data;
      const values = []
      const covid19 = []
      dataCovid19.forEach(e => {
        values.push({
          id: e.updated,
          label: e.country,
          value: e.cases,
          color: ""
        })
      })
      covid19.push({
        values
      })
      this.setState({ covid19 });
    })
  }
  render () {
    return (
      <div>
        <Chart
          dataCovid={this.state.covid19}
        />
      </div>
    )
  }
}