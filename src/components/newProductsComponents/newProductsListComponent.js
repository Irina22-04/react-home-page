import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import ProductTileComponent from '../productsComponents/productTileComponent/productTileComponent';
import './newProductsListComponent.scss';

class NewProductsListComponent extends React.PureComponent {

    static propTypes = {
        products: PropTypes.object.isRequired,
    };

    constructor(props) {
        super();
    }

    productsTableCode = () => {
        const newProducts = this.props.products.products.filter(item => item.newProduct === true)
        return newProducts ? (newProducts.map(product => {
            return (
                <ProductTileComponent key={product.id}
                                      product={product}
                class={'new-product'}/>
            );
        })) : null;
    };

    render() {
        return (

            <div className="new-product-list">
                {this.productsTableCode()}
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.productReducer,
    };
}

export default connect(mapStateToProps)(NewProductsListComponent);