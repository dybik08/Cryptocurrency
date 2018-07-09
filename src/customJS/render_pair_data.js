import React from 'react';
import data from '../tickers';

export default function (pair) {

    switch (pair) {
        case "btcusd":
            return data.btcusd.map((value) =>
                <li className="list-group-item currencyPairDetail">{value}</li>
            );

        case "dshusd":
            return data.dshusd.map((value) =>
                <li className="list-group-item currencyPairDetail">{value}</li>
            );

        case "dshbtc":
            return data.dshbtc.map((value) =>
                <li className="list-group-item currencyPairDetail">{value}</li>
            );

        case "etcusd":
            return data.etcusd.map((value) =>
                <li className="list-group-item currencyPairDetail">{value}</li>
            );
        case "etcbtc":
            return data.etcbtc.map((value) =>
                <li className="list-group-item currencyPairDetail">{value}</li>
            );

        case "ethusd":
            return data.ethusd.map((value) =>
                <li className="list-group-item currencyPairDetail">{value}</li>
            );

        case "ethbtc":
            return data.ethbtc.map((value) =>
                <li className="list-group-item currencyPairDetail">{value}</li>
            );

        case "ltcusd":
            return data.ltcusd.map((value) =>
                <li className="list-group-item currencyPairDetail">{value}</li>
            );

        case "ltcbtc":
            return data.ltcbtc.map((value) =>
                <li className="list-group-item currencyPairDetail">{value}</li>
            );

        case "xmrusd":
            return data.xmrusd.map((value) =>
                <li className="list-group-item currencyPairDetail">{value}</li>
            );

        case "xmrbtc":
            return data.xmrbtc.map((value) =>
                <li className="list-group-item currencyPairDetail">{value}</li>
            );

        case "zecusd":
            return data.zecusd.map((value) =>
                <li className="list-group-item currencyPairDetail">{value}</li>
            );

        case "zecbtc":
            return data.zecbtc.map((value) =>
                <li className="list-group-item currencyPairDetail">{value}</li>
            );
        default:
            return "Error! No data available!";
    }

}