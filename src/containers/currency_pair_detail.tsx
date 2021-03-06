import * as React from 'react';
import { connect } from 'react-redux';
import {fetchCurrency} from "../actions/fetch_currency_pair_data";
import { Link } from 'react-router-dom';
import $ from "jquery";
import Particles from 'react-particles-js';
import showCurrencyValue from '../components/render_pair_data'
import renderPairName from '../components/render_pair_name'
import {number} from "prop-types";

interface IProps {
    fetchCurrency: any,
    pickedCurrencyPair: any,
    match: any
}

class CurrencyPairDetail extends React.Component<IProps> {
    componentDidMount(){
        this.props.fetchCurrency();

        $('.rolldown-list li').each(function () {
            let delay = ($(this).index() / 4) + 's';
            $(this).css({
                webkitAnimationDelay: delay,
                mozAnimationDelay: delay,
                animationDelay: delay
            });
        });
    }

    render(){
        let pair: string = this.props.match.params.pair;

        return(
            <div>
                <div>
                    <Link className="float-right" to="/">Back to index</Link>
                </div>
                <Particles className="particles"/>
                {renderPairName(pair)}
                <div className="row text-center ">
                    <ul className="list-group col-md-3 col-sm-4 col-lg-2 col-6 ">
                        <li className="list-group-item currencyPairDetail">Bid:</li>
                        <li className="list-group-item currencyPairDetail">Bid size:</li>
                        <li className="list-group-item currencyPairDetail">Ask:</li>
                        <li className="list-group-item currencyPairDetail">Ask size:</li>
                        <li className="list-group-item currencyPairDetail">Daily change:</li>
                        <li className="list-group-item currencyPairDetail">Last price:</li>
                        <li className="list-group-item currencyPairDetail">Volume 24h:</li>
                        <li className="list-group-item currencyPairDetail">High:</li>
                        <li className="list-group-item currencyPairDetail">Low:</li>
                    </ul>
                    <ul className="list-group col-md-5 col-sm-6 col-lg-3 col-6">
                        {showCurrencyValue(pair)}
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