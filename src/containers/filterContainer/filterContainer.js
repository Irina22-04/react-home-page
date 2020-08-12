import React from "react";

import './filterContainer.scss';
import TitleComponent from '../../components/commonComponents/titleComponent/titleComponent';
import FilterFormComponent from '../../components/filterComponents/filterFormComponent/filterFormComponent';

function filterContainer() {
    return (
        <div className="filter">
            <TitleComponent>Filters</TitleComponent>
            <FilterFormComponent/>
        </div>
    )
}

export default filterContainer;