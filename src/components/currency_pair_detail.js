import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchCurrency} from "../actions/fetch_currency_pair_data";
import { Link } from 'react-router-dom';
import data from "../tickers";


class CurrencyPairDetail extends Component {
    componentDidMount(){
        this.props.fetchCurrency();
    }
    renderPairData = () => {
        let pair = this.props.match.params.pair;
        switch (pair) {
            case "btcusd":
                return data.btcusd.map((value) =>
                    <li className="list-group-item">{value}</li>
                );

            case "dashusd":
                return data.dashusd.map((value) =>
                    <li className="list-group-item">{value}</li>
                );

            case "dashbtc":
                return data.dashbtc.map((value) =>
                    <li className="list-group-item">{value}</li>
                );

            case "etcusd":
                return data.etcusd.map((value) =>
                    <li className="list-group-item">{value}</li>
                );
            //tutaj zrobione
            case "etcbtc":
                return data.etcbtc.map((value) =>
                    <li className="list-group-item">{value}</li>
                );

            case "ethusd":
                return data.ethusd.map((value) =>
                    <li className="list-group-item">{value}</li>
                );

            case "ethbtc":
                return data.ethbtc.map((value) =>
                    <li className="list-group-item">{value}</li>
                );

            case "ltcusd":
                return data.ltcusd.map((value) =>
                    <li className="list-group-item">{value}</li>
                );

            case "xmrusd":
                return data.xmrusd.map((value) =>
                    <li className="list-group-item">{value}</li>
                );

            case "xmrbtc":
                return data.xmrbtc.map((value) =>
                    <li className="list-group-item">{value}</li>
                );

            case "zecusd":
                return data.zecusd.map((value) =>
                    <li className="list-group-item">{value}</li>
                );

            case "zecbtc":
                return data.zecbtc.map((value) =>
                    <li className="list-group-item">{value}</li>
                );


            default:
                return "Error! No data available!";
        }
    };

    render(){
        return(
            <div>
                <div>
                    <Link className="float-right" to="/">Back to index</Link>
                </div>
                <div className="text-center col-md-6"> Pair name </div>
                <div className="row text-center">
                    <ul className="list-group col-md-3">
                        <li className="list-group-item">Bid:</li>
                        <li className="list-group-item">Bid size:</li>
                        <li className="list-group-item">Ask:</li>
                        <li className="list-group-item">Ask size:</li>
                        <li className="list-group-item">Daily change:</li>
                        <li className="list-group-item">Last price:</li>
                        <li className="list-group-item">Volume 24h:</li>
                        <li className="list-group-item">High:</li>
                        <li className="list-group-item">Low:</li>
                    </ul>
                    <ul className="list-group col-md-3">
                        {this.renderPairData()}
                    </ul>
                </div>
            </div>
        );
    };
}

function mapStateToProps({ currencyPair, pickedPair }){
    return {
        currencyPair,
        pickedPair
    };
}

export default connect(mapStateToProps, {fetchCurrency})(CurrencyPairDetail);