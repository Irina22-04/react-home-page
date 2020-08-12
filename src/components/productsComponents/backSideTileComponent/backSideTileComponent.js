import React from "react";
import PropTypes from "prop-types";

import './backSideTileComponent.scss';
import DotsComponent from '../../commonComponents/dotsComponent/dotsComponent';
import PSUComponent from '../PSUComponent/PSUComponent';

class BackSideTileComponent extends React.PureComponent {

    static propTypes = {
        product: PropTypes.object.isRequired,
    };

    constructor(props) {
        super();
    }

    createRates = () => {
        const {product} = this.props;
        switch (product.type) {
            case 1:
                const rates = [...Object.keys(product.prices[0]), Object.keys(product.prices[product.prices.length - 1])];
                return `${rates[0]}-${rates[1]} ${product.params}`;
            default:
                return product.params;
        }
    };

    createPSU = () => {
        return this.props.product.psu ? <PSUComponent/> : null;
    };

    getPrice = () => {
        const {product} = this.props;
        switch (product.type) {
            case 1:
                const prices = [...Object.values(product.prices[0]), ...Object.values(product.prices[product.prices.length - 1])];
                return `$${prices[0].toFixed(2)} - $${prices[1].toFixed(2)}`;
            default:
                return `$${product.prices}`;
        }
    };

    render() {
        const {product} = this.props;
        return (
            <div className="back-product-tile">
                <div className="back-substrate"/>
                <div className="back-tile-image">
                    <img src={product.image} alt={product.name}/>

                </div>

                <DotsComponent/>
                <div className="absolut-container">
                    <div className="tile-name">{product.name}</div>
                    <div className="tile-params">{this.createRates()}</div>
                    <div className="tile-price">$153.00</div>
                    {this.createPSU()}
                    <div className="hash-rate">
                        <DotsComponent/>
                        Hash rate: 11.5
                    <img className="arrow" src="images/arrowDown.svg" alt='arrow down'/>
                    </div>
                    <div className="tile-buttons">
                        <div className="details-button">Details</div>
                        <div className="add-button">
                            <DotsComponent/>
                            Add to cart
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BackSideTileComponent;