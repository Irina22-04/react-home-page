import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

import ProductTileComponent from '../productTileComponent/productTileComponent';
import './productsListComponent.scss';

class ProductsListComponent extends React.PureComponent {

    static propTypes = {
        products: PropTypes.object.isRequired,
    };

    constructor(props) {
        super();
    }

    productsTableCode = () => {
        return this.props.products.products ? (this.props.products.products.map(product => {
            return (
                <ProductTileComponent key={product.id}
                                      product={product}/>
            );
        })) : null;
    };

    productsTableCodeMobile = () => {
        if (!this.props.products.products) {
            return null;
        }

        const mobileProductList = this.props.products.products.slice(0, 4);
        mobileProductList.splice(2, 0, 'banner');
        return mobileProductList.map(product => {
            return typeof product === 'object' ?
                <ProductTileComponent key={product.id+'key'}
                                      product={product}/>
                : <div key='banner' className="banner"><img src='images/banner1.png' alt='banner'/></div>;
        })
    };

    updateRightScroll() {
        const {top: thumbTop} = this._scrollBarRef.ps.scrollbarY.style;
        const {top} = this._scrollBarRef.ps.scrollbarYRail.style;
        this._RightScrollThumbRef.style.top = thumbTop;
        this._RightScrollTrackRef.style.top = top
    }

    render() {
        return (
                <div className="overflow-wrapper">
                    <PerfectScrollbar
                        ref={(ref) => {
                            this._scrollBarRef = ref;
                        }}
                        onScrollY={() => this.updateRightScroll()}
                    >
                        <div className="product-list desktop-list">
                        {this.productsTableCode()}
                    </div>

                        <div className="product-list">
                            {this.productsTableCodeMobile()}
                        </div>
                        <div className="right-track"
                             ref={(ref) => {this._RightScrollTrackRef = ref;}}
                        >
                            <div className="right-thumb"
                                 ref={(ref) => {this._RightScrollThumbRef = ref;}}>
                            </div>
                        </div>
                    </PerfectScrollbar>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.productReducer,
    };
}

export default connect(mapStateToProps)(ProductsListComponent);