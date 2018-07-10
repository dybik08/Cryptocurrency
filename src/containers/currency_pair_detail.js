import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchCurrency} from "../actions/fetch_currency_pair_data";
import { Link } from 'react-router-dom';
import $ from "jquery";
import Particles from 'react-particles-js';
import showCurrencyValue from '../customJS/render_pair_data'
import renderPairName from '../customJS/render_pair_name'


class CurrencyPairDetail extends Component {
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
        let pair = this.props.match.params.pair;
        return(
            <div>
                <div>
                    <Link className="float-right" to="/">Back to index</Link>
                </div>
                <Particles className="particles"/>
                {renderPairName(pair)}
                <div className="row text-center ">
                    <ul className="list-group col-md-2 ">
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
                    <ul className="list-group col-md-3">
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