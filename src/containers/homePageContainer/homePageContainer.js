import React from "react";

import FilterContainer from '../filterContainer/filterContainer';
import ProductsContainer from '../productsContainer/productsContainer';
import NewProductsContainer from '../newProductsContainer/newProductContainer';
import NewsContainer from '../newsContainer/newsContainer';
import './homePageContainer.scss';

import {connect} from "react-redux";

class HomePageContainer extends React.PureComponent {

    componentDidUpdate(prevProps) {
        if(this.props.openMenuReducer.openMenu !== prevProps.openMenuReducer.openMenu) {
            const newUrlPart = this.props.openMenuReducer.openMenu ? '?menu' : "/main";
            return  this.props.history.push(newUrlPart);

        }

    };

    render() {
        return (
            <div className="main-container">
                <div>
                    <div className="components-container">
                        <FilterContainer/>
                        <ProductsContainer/>
                        <NewProductsContainer/>
                        <NewsContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        openMenuReducer: state.openMenuReducer,
    };
}

export default connect(mapStateToProps)(HomePageContainer);