import React, { Component } from 'react';
import './style/App.css';
import {connect} from 'react-redux';

import {fetchCurrency} from "./actions/fetch_currency_pair_data";

import CurrencyPair from './components/currency_pair';

class App extends Component {

  render() {

    return (
      <div className="App">
        <ul className="list-group">
            Cryptocurrency pairs:
            <li className="list-group-item">
                <CurrencyPair name={'BTC/USD'}/>
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'DASH/USD'}/>
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'DASH/BTC'}/>
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'ETC/USD'}/>
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'ETC/BTC'}/>
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'ETH/USD'}/>
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'ETH/BTC'}/>
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'LTC/USD'}/>
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'LTC/BTC'}/>
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'XMR/USD'}/>
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'XMR/BTC'}/>
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'ZEC/UTC'}/>
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'ZEC/BTC'}/>
            </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ currencyPair }){

    return {
        currencyPair,
    };
}
function mapDispatchToProps(dispatch){
    return {
        fetchCurrency: currencyPair => dispatch(fetchCurrency(currencyPair))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
