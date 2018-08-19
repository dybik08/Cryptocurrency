import React from 'react';

export default function(pair){

    let CryptoIcon;
    let pairName = {};

    if (pair !== 'dashbtc' && pair !== 'dashusd'){
        CryptoIcon = require(`react-cryptocoins/dist/icons/${(pair.substring(0,3)).toUpperCase()}`);
    }else {
        CryptoIcon = require(`react-cryptocoins/dist/icons/${(pair.substring(0,4)).toUpperCase()}`);
    }

    const iconChooser = (pair) => {
        switch (pair) {
            case pair:
                return (
                        <CryptoIcon.default className="iconLogo" size={30} />
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

