import React from 'react';
import data from '../tickers';
import _ from 'lodash';

export default function (pair) {
    console.log("Data: ", data);


    const selectedPair =  _.filter(data, (value, key) => {
        if(key === pair){
            return (
                true
            );
        }
    });



    console.log(selectedPair.map(value => value.map(innerValue => console.log(innerValue))));

    return selectedPair.map(value => value.map(innerValue =>
        <li  className="list-group-item currencyPairDetail">{innerValue}</li>
    ));
}