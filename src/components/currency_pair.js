import React from 'react';
import {Link} from 'react-router-dom';

export default(props) => {

    const onPairClick = (pickedPair) =>{
        return props.pickedCurrencyPair(pickedPair);
    };

    return (
        <div>
            <Link className="btn btn-primary" onClick={onPairClick.bind(this, props.pair)} to={`/pair/${props.pair}`}>
                {props.name}
            </Link>
        </div>
    );
}