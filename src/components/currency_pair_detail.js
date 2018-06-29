import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchCurrency} from "../actions/fetch_currency_pair_data";
import { Link } from 'react-router-dom';
import data from "../tickers";
import { Btc,Dash,Etc,Eth,Ltc,Xmr,Zec } from 'react-cryptocoins';



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

            case "ltcbtc":
                return data.ltcbtc.map((value) =>
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

    renderPairName = () => {
        let pair = this.props.match.params.pair;
        let pairName = {};
        switch (pair) {
            case "btcusd":
                pairName = "BTC/USD";
                return (
                    <div className="text-center col-md-6 row pairName">
                        <Btc color="orange" className="iconLogo" />
                        {pairName}
                    </div>
                );

            case "dashusd":
                pairName = "DASH/USD";
                return (
                    <div className="text-center col-md-6 row pairName">
                        <Dash color="blue" className="iconLogo" />
                        {pairName}
                    </div>
                );

            case "dashbtc":
                pairName = "DASH/BTC";
                return (
                    <div className="text-center col-md-6 row pairName">
                        <Dash color="blue" className="iconLogo" />
                        {pairName}
                    </div>
                );

            case "etcusd":
                pairName = "ETC/USD";
                return (
                    <div className="text-center col-md-6 row pairName">
                        <Etc color="green" className="iconLogo" />
                        {pairName}
                    </div>
                );

            case "etcbtc":
                pairName = "ETC/BTC";
                return (
                    <div className="text-center col-md-6 row pairName">
                        <Etc color="green" className="iconLogo" />
                        {pairName}
                    </div>
                );

            case "ethusd":
                pairName = "ETH/USD";
                return (
                    <div className="text-center col-md-6 row pairName">
                        <Eth color="blue" className="iconLogo" />
                        {pairName}
                    </div>
                );

            case "ethbtc":
                pairName = "ETH/BTC";
                return (
                    <div className="text-center col-md-6 row pairName">
                        <Eth color="blue" className="iconLogo" />
                        {pairName}
                    </div>
                );

            case "ltcusd":
                pairName = "LTC/USD";
                return (
                    <div className="text-center col-md-6 row pairName">
                        <Ltc color="grey" className="iconLogo" />
                        {pairName}
                    </div>
                );

            case "ltcbtc":
                pairName = "LTC/BTC";
                return (
                    <div className="text-center col-md-6 row pairName">
                        <Ltc color="grey" className="iconLogo" />
                        {pairName}
                    </div>
                );

            case "xmrusd":
                pairName = "XMR/USD";
                return (
                    <div className="text-center col-md-6 row pairName">
                        <Xmr color="orange" className="iconLogo" />
                        {pairName}
                    </div>
                );

            case "xmrbtc":
                pairName = "XMR/BTC";
                return (
                    <div className="text-center col-md-6 row pairName">
                        <Xmr color="orange" className="iconLogo" />
                        {pairName}
                    </div>
                );

            case "zecusd":
                pairName = "ZEC/USD";
                return (
                    <div className="text-center col-md-6 row pairName">
                        <Zec color="gold" className="iconLogo" />
                        {pairName}
                    </div>
                );

            case "zecbtc":
                pairName = "ZEC/BTC";
                return (
                    <div className="text-center col-md-6 row pairName">
                        <Zec color="gold" className="iconLogo" />
                        {pairName}
                    </div>
                );


            default:
                return "Error! No data available!";
        }
    };


    render(){
        console.log("renderPairName: ", this.renderPairName())
        return(
            <div>
                <div>
                    <Link className="float-right" to="/">Back to index</Link>
                </div>
                {this.renderPairName()}
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