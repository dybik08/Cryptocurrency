import React, { Component } from 'react';
import './style/App.css';
import {connect} from 'react-redux';
import {pickedCurrencyPair} from "./actions/picked_pair";
import {fetchCurrency} from "./actions/fetch_currency_pair_data";
import CurrencyPair from './components/currency_pair';
import $ from "jquery";
import { Btc,Dash,Etc,Eth,Ltc,Xmr,Zec } from 'react-cryptocoins';

class App extends Component {
    componentDidMount(){
        this.props.fetchCurrency();
        $('.rolldown-list li').each(function () {
            let delay = ($(this).index() / 4) + 's';
            $(this).css({
                webkitAnimationDelay: delay,
                mozAnimationDelay: delay,
                animationDelay: delay
            });
        });
    }

  render() {
      return (
      <div className="App" >
        <ul className="list-group col-md-2 rolldown-list" id="myList">
            <h1>Cryptocurrency pairs:</h1>
            <li className="list-group-item ">
                <div className="row" id="rootListItem">
                    <Btc color="orange" className="iconLogoList" size={30} />
                    <CurrencyPair name={'BTC/USD'} pair={"btcusd"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)}  />
                </div>
            </li>
            <li className="list-group-item">
                <div className="row" id="rootListItem">
                    <Dash color="blue" className="iconLogoList" size={30} />
                    <CurrencyPair name={'DASH/USD'} pair={"dashusd"} pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)} />
                </div>
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
