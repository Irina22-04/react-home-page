import React from "react";
import PropTypes from "prop-types";

import './coinComponent.scss';
import DotsComponent from '../../commonComponents/dotsComponent/dotsComponent';

class CoinComponent extends React.PureComponent {

    static propTypes = {
        coin: PropTypes.string.isRequired,
        selected: PropTypes.string,
    };

    createClassName = () => {
        return this.props.selected === 'true' ? 'selected-coin' : null;
    };

    createCoinImage = () => {
        switch (this.props.coin) {
            case 'btc':
                return 'images/btc.png';
            case('ppc'):
                return 'images/ppc.png';
            default:
                return 'images/etp.png';
        }
    };

    render() {
        return (
            <div className={`coin ${this.createClassName()}`}>
                <img className='coin-image' src={this.createCoinImage()} alt={this.props.coin}/>
                <DotsComponent/>
                <div className='coin-name'>{this.props.coin.toUpperCase()}</div>
            </div>
        )
    }
}

export default CoinComponent;