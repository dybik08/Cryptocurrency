import * as React from 'react';
import data from '../tickers.json';
import * as _ from 'lodash';

export default function (pair: string) {

    const selectedPair =  _.filter(data, (value, key) => {
        if(key === pair){
            return (
                true
            );
        }
    });

    return selectedPair.map(value => value.map(innerValue =>
        <li  className="list-group-item currencyPairDetail">{innerValue}</li>
    ));
}