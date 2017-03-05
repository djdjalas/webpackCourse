import React, { Component } from 'react';
import getFxRates from 'sectionThreeSolution';
require('./style');

export default class FxRatesComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fixerResponse: []
    };
  }

  componentDidMount() {
    getFxRates(this.props.baseCurrency, fixerResponse => {
      this.setState({
        fixerResponse
      });
    });
  }

  render() {
    let dailyRates = [];
    const { fixerResponse: { rates } } = this.state;
    const { fixerResponse: { date } } = this.state;

    const { baseCurrency } = this.props;

    for(const currency in rates) {
      const rate = rates[currency];
      dailyRates.push(
        <li className = 'list-group-item' key = { currency }>
         { currency } - <i className="fa fa-usd fa-2x" aria-hidden="true"> { rate } </i>
        </li>
      );
    }

    return (
      <div id="fxContainer">
        <h2> Base { baseCurrency } Date <i className="fa fa-calendar fa-lg" aria-hidden="true"> { date } </i> </h2>
        <ul className='list-group'>
          { dailyRates }
        </ul>
      </div>
    );
  }

}
