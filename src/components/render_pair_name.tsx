import * as React from 'react';

export default (pair: string) => {
    let CryptoIcon;
    let pairName: string = '';

    if (pair !== 'dashbtc' && pair !== 'dashusd'){
        CryptoIcon = require(`react-cryptocoins/dist/icons/${(pair.substring(0,3)).toUpperCase()}`);
    }else {
        CryptoIcon = require(`react-cryptocoins/dist/icons/${(pair.substring(0,4)).toUpperCase()}`);
    }


    switch (pair) {
        case pair:
            if (pair !== 'dashbtc' && pair !== 'dashusd'){
                pairName = (pair.substring(0,3)+'/'+pair.substring(3,6)).toUpperCase();
            }else {
                pairName = (pair.substring(0,4)+'/'+pair.substring(4,7)).toUpperCase();
            }

            return (
                <div className="text-center col-md-6 row pairName">
                    <CryptoIcon.default className="iconLogo" size={40} />
                    {pairName}
                </div>
            );
        default:
            return "Error! No data available!";
    }
};
