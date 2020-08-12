import React from "react";
import PropTypes from "prop-types";

import './frontSideTileComponent.scss';
import DotsComponent from '../../commonComponents/dotsComponent/dotsComponent';
import StarComponent from '../../commonComponents/starComponent/starComponent';
import PSUComponent from '../PSUComponent/PSUComponent';

class FrontSideTileComponent extends React.PureComponent {

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

    createStar = () => {
        return this.props.product.star ? <StarComponent/> : null;
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
                return `${product.prices}`
        }
    };

    render() {
        const {product} = this.props;
        return (
            <div className="front-product-tile">
                <div className="substrate"/>
                <DotsComponent/>
                <div className="tile-name">{product.name}</div>
                <div className="tile-params">{this.createRates()}</div>
                <div className="tile-image">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="tile-price">{this.getPrice()}</div>
                {this.createStar()}
                {this.createPSU()}
            </div>
        )
    }
}

export default FrontSideTileComponent;