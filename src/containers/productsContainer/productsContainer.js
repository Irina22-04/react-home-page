import React from "react";

import './productsContainer.scss';
import TitleComponent from '../../components/commonComponents/titleComponent/titleComponent';
import ProductsListComponent from '../../components/productsComponents/productsListComponent/productsListComponent';

function ProductsContainer () {
        return (
            <div className="products">
                <div>
                    <div className="product-component-wrapper">
                        <TitleComponent class='sale-products'>On sale</TitleComponent>
                        <div className="view-type">
                            View: Grid
                            <img src="images/grid.svg" alt='grid'/> <img src="images/list.svg" alt='list'/></div>
                        <ProductsListComponent/>
                    </div>
                </div>
            </div>
        )
}

export default ProductsContainer;