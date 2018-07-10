import React from 'react';
import * as Icon from 'react-cryptocoins';



export default (pair) => {

    let pairName = {};
    switch (pair) {
        case "btcusd":
            pairName = "BTC/USD";
            return (
                <div className="text-center col-md-6 row pairName">
                    <Icon.Btc color="orange" className="iconLogo" />
                    {pairName}
                </div>
            );

        case "dshusd":
            pairName = "DASH/USD";
            return (
                <div className="text-center col-md-6 row pairName">
                    <Icon.Dash color="blue" className="iconLogo" />
                    {pairName}
                </div>
            );

        case "dshbtc":
            pairName = "DASH/BTC";
            return (
                <div className="text-center col-md-6 row pairName">
                    <Icon.Dash color="blue" className="iconLogo" />
                    {pairName}
                </div>
            );

        case "etcusd":
            pairName = "ETC/USD";
            return (
                <div className="text-center col-md-6 row pairName">
                    <Icon.Etc color="green" className="iconLogo" />
                    {pairName}
                </div>
            );

        case "etcbtc":
            pairName = "ETC/BTC";
            return (
                <div className="text-center col-md-6 row pairName">
                    <Icon.Etc color="green" className="iconLogo" />
                    {pairName}
                </div>
            );

        case "ethusd":
            pairName = "ETH/USD";
            return (
                <div className="text-center col-md-6 row pairName">
                    <Icon.Eth color="blue" className="iconLogo" />
                    {pairName}
                </div>
            );

        case "ethbtc":
            pairName = "ETH/BTC";
            return (
                <div className="text-center col-md-6 row pairName">
                    <Icon.Eth color="blue" className="iconLogo" />
                    {pairName}
                </div>
            );

        case "ltcusd":
            pairName = "LTC/USD";
            return (
                <div className="text-center col-md-6 row pairName">
                    <Icon.Ltc color="grey" className="iconLogo" />
                    {pairName}
                </div>
            );

        case "ltcbtc":
            pairName = "LTC/BTC";
            return (
                <div className="text-center col-md-6 row pairName">
                    <Icon.Ltc color="grey" className="iconLogo" />
                    {pairName}
                </div>
            );

        case "xmrusd":
            pairName = "XMR/USD";
            return (
                <div className="text-center col-md-6 row pairName">
                    <Icon.Xmr color="orange" className="iconLogo" />
                    {pairName}
                </div>
            );

        case "xmrbtc":
            pairName = "XMR/BTC";
            return (
                <div className="text-center col-md-6 row pairName">
                    <Icon.Xmr color="orange" className="iconLogo" />
                    {pairName}
                </div>
            );

        case "zecusd":
            pairName = "ZEC/USD";
            return (
                <div className="text-center col-md-6 row pairName">
                    <Icon.Zec color="gold" className="iconLogo" />
                    {pairName}
                </div>
            );

        case "zecbtc":
            pairName = "ZEC/BTC";
            return (
                <div className="text-center col-md-6 row pairName">
                    <Icon.Zec color="gold" className="iconLogo" />
                    {pairName}
                </div>
            );


        default:
            return "Error! No data available!";
    }
};