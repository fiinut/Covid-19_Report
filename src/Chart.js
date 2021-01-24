import React, { Component} from 'react';
import { DynamicBarChart } from 'react-dynamic-charts';
import 'react-dynamic-charts/dist/index.css';
export default class Chart extends Component {
  render () {
    return (
      <DynamicBarChart
        data={this.props.dataCovid}
      />
    )
  }
}