import React, { Component } from 'react';
import './static/App.css';
import {connect} from 'react-redux';
import {pickedCurrencyPair} from "./actions/picked_pair";
import {fetchCurrency} from "./actions/fetch_currency_pair_data";
import CurrencyPair from './components/currency_pair';
import $ from "jquery";
import iconChooser from "./customJS/icon_chooser";
import Particles from 'react-particles-js';
import symbols from './symbols.json';

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

  renderCurrencyPairList = (symbol) => {
      const name = symbol.toUpperCase();
      return (
          <li className="list-group-item " key={symbol} >
            <div className="row" id="rootListItem">
                {iconChooser(symbol)}
                <CurrencyPair name={name} pair={symbol}  pickedCurrencyPair={this.props.pickedCurrencyPair.bind(this)}  />
            </div>
          </li>
      );
  };

  render() {



      const sortedSymbols = symbols.sort();
      return (
    <div>
        <Particles className="particles"/>
      <div className="App" >
          <h1>Cryptocurrency pairs:</h1>
        <ul className="list-group col-md-4 rolldown-list" id="myList">
            {sortedSymbols.map(this.renderCurrencyPairList)}
        </ul>
      </div>
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
