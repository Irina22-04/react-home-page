import React from "react";

import './newProductContainer.scss';
import TitleComponent from '../../components/commonComponents/titleComponent/titleComponent';
import NewProductsListComponent from '../../components/newProductsComponents/newProductsListComponent';

function newProductContainer () {

        return (
            <div className="new-products">
                <TitleComponent class="new-product">New Listings</TitleComponent>
                <NewProductsListComponent/>
            </div>
        )
}

export default newProductContainer;