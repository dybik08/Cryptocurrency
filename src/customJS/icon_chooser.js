import * as Icon from 'react-cryptocoins';
import React from 'react';



export default function(pairName){

    const iconChooser = (pairName) => {
        switch (pairName) {
            case "btcusd":
                return (
                    <Icon.Btc color="orange" className="iconLogoList" size={30} />
                );
            case "dshusd":
                return (
                        <Icon.Dash color="blue" className="iconLogoList" size={30} />
                );

            case "dshbtc":
                return (
                        <Icon.Dash color="blue" className="iconLogoList" size={30} />
                );

            case "etcusd":
                return (
                        <Icon.Etc color="green" className="iconLogoList" size={30} />
                );

            case "etcbtc":
                return (
                        <Icon.Etc color="green" className="iconLogoList" size={30} />
                );

            case "ethusd":
                return (
                        <Icon.Eth color="blue" className="iconLogoList" size={30} />
                );

            case "ethbtc":
                return (
                        <Icon.Eth color="blue" className="iconLogoList" size={30} />
                );

            case "ltcusd":
                return (
                        <Icon.Ltc color="grey" className="iconLogoList" size={30} />
                );

            case "ltcbtc":
                return (
                        <Icon.Ltc color="grey" className="iconLogoList" size={30} />
                );

            case "xmrusd":
                return (
                        <Icon.Xmr color="orange" className="iconLogoList" size={30} />
                );

            case "xmrbtc":
                return (
                        <Icon.Xmr color="orange" className="iconLogoList" size={30} />
                );

            case "zecusd":
                return (
                        <Icon.Zec color="gold" className="iconLogoList" size={30} />
            );

            case "zecbtc":
                return (
                        <Icon.Zec color="gold" className="iconLogoList" size={30} />
                );


            default:
                return "Error! No data available!";
        }
    };

    return(
        <div className="logo">
            {iconChooser(pairName)}
        </div>
    );
};

