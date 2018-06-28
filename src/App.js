import React, { Component } from 'react';
import './style/App.css';
import {connect} from 'react-redux';
import {pickedCurrencyPair} from "./actions/picked_pair";
import {fetchCurrency} from "./actions/fetch_currency_pair_data";
import CurrencyPair from './components/currency_pair';

class App extends Component {
    componentDidMount(){
        this.props.fetchCurrency();
    }

  render() {
      return (
      <div className="App">
        <ul className="list-group">
            Cryptocurrency pairs:
            <li className="list-group-item">
                <CurrencyPair name={'BTC/USD'} pair={"btcusd"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)}  />
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'DASH/USD'} pair={"dashusd"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)} />
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'DASH/BTC'} pair={"dashbtc"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)} />
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'ETC/USD'} pair={"etcusd"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)} />
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'ETC/BTC'} pair={"etcbtc"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)} />
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'ETH/USD'} pair={"ethusd"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)} />
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'ETH/BTC'} pair={"ethbtc"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)} />
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'LTC/USD'} pair={"ltcusd"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)} />
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'LTC/BTC'} pair={"ltcbtc"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)} />
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'XMR/USD'} pair={"xmrusd"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)} />
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'XMR/BTC'} pair={"xmrbtc"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)} />
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'ZEC/USD'} pair={"zecusd"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)} />
            </li>
            <li className="list-group-item">
                <CurrencyPair name={'ZEC/BTC'} pair={"zecbtc"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)} />
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
        pickedCurrencyPair: currencyPair => dispatch(pickedCurrencyPair(currencyPair)),
        fetchCurrency
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
