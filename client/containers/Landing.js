import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Currencies from './../components/Currencies';

global.fetch = require('node-fetch');
const cc = require('cryptocompare');

class Landing extends Component {
    constructor() {
        super();

        this.state = {
            currencies: []
        }

        this.loadCurrencies = this.loadCurrencies.bind(this);
        this.loadCurrencies();
    }

    loadCurrencies() {
        cc.coinList()
            .then(coinList => {
                // console.log(coinList);
                const names = Object.keys(coinList.Data);
                console.log(names);
                // const currencies = Object.keys(coinList.Data).map(s => Object.assign(coinList.Data[s], { name: s })).sort(s => s.TotalCoinSupply)
                // console.log(currencies.map(s => s.SortOrder));
                cc.priceFull('ETH', 'USD')
                    .then(coinList => {
                        console.log(coinList);
                        // const names = Object.keys(coinList.Data);
                        // console.log(names);
                        // const currencies = Object.keys(coinList.Data).map(s => Object.assign(coinList.Data[s], { name: s })).sort(s => s.TotalCoinSupply)
                        // // console.log(currencies.map(s => s.SortOrder));
                        // this.setState({
                        //     currencies
                        // })
                    });
            });


    }

    render() {
        const { currencies } = this.state;

        return (
            <div className="contain">
                <h1>Currencies</h1>
                <Currencies currencies={currencies} />
            </div>
        )
    }
}

export default Landing;
