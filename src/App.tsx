import * as React from 'react';
import './static/App.css';
import {connect} from 'react-redux';
import {pickedCurrencyPair} from "./actions/picked_pair";
import {fetchCurrency} from "./actions/fetch_currency_pair_data";
import CurrencyPair from './components/currency_pair';
import $ from "jquery";
import iconChooser from "./components/icon_chooser";
import Particles from 'react-particles-js';
import symbols from './symbols.json';

interface IProps {
    fetchCurrency: any,
    pickedCurrencyPair: any
}


class App extends React.Component<IProps> {

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

  renderCurrencyPairList = (symbol: string) => {
      const name: string = symbol.toUpperCase();
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
      const sortedSymbols: string[] = symbols.sort();

      return (
          <div>
              <Particles className="particles"/>
              <div className="App">
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
