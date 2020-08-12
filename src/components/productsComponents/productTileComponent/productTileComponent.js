import React from "react";
import PropTypes from "prop-types";

import './productTileComponent.scss';
import FrontSideTileComponent from '../frontSideTileComponent/frontSideTileComponent';
import BackSideTileComponent from '../backSideTileComponent/backSideTileComponent';

class ProductTileComponent extends React.PureComponent {

    static propTypes = {
        product: PropTypes.object.isRequired,
        class: PropTypes.string,
    };

    constructor(props) {
        super();
    }

    createClassName = () => {
      const className = this.props.class;
      return className ? className : '';
    };

    render() {
        const {product} = this.props;
        return (
            <div className={`product-tile ${this.createClassName()}`}>
                <div className="front-tile">
                    <FrontSideTileComponent product={product}/>
                </div>
                <div className="back-tile">
                    <BackSideTileComponent product={product}/>
                </div>
            </div>
        )
    }
}

export default ProductTileComponent;