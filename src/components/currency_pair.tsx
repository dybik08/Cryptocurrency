import * as React from 'react';
import { Link } from 'react-router-dom';

export default(props: any) => {

    const onPairClick = (pickedPair: string): object => {
        return props.pickedCurrencyPair(pickedPair);
    };

    return (
        <div className="btn btn-success" >
            <Link  onClick={onPairClick.bind(this, props.pair)} to={`/pair/${props.pair}`}>
                {props.name}
            </Link>
        </div>
    );
}