import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';

const Currencies = ({ currencies }) => (
    <div className="row currencies">
        {console.log('c', currencies)}
        { currencies.map((currency) => (
            <Currency detail={currency} />
        ))}
    </div>
);

Currencies.propTypes = {
    currencies: PropTypes.array.isRequired
}

export default Currencies;
