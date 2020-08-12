import React from "react";

import './filterFormComponent.scss';
import FilterFormFieldComponent from '../FilterFormFieldComponent/filterFormFieldComponent';
import CoinComponent from '../coinComponent/coinComponent';
import ManufactureFieldComponent from '../manufactureFieldComponent/manufactureFieldComponent';

function FilterFormComponent () {

        return (
            <div className="filter-form">
                <FilterFormFieldComponent type="close-field">By Algorithm</FilterFormFieldComponent>
                <FilterFormFieldComponent type="open-field">By Coin</FilterFormFieldComponent>
                <CoinComponent coin="btc" selected='false'/>
                <CoinComponent coin="ppc" selected='true'/>
                <CoinComponent coin="etp" selected='false'/>
                <CoinComponent coin="btc" selected='false'/>
                <CoinComponent coin="ppc" selected='false'/>
                <CoinComponent coin="etp" selected='false'/>
                <FilterFormFieldComponent type="close-field">By Equipment</FilterFormFieldComponent>
                <FilterFormFieldComponent type="open-field">By Manufacturer</FilterFormFieldComponent>
                <ManufactureFieldComponent selected='true'>AMD</ManufactureFieldComponent>
                <ManufactureFieldComponent selected='false'>Boundary Electric</ManufactureFieldComponent>
                <ManufactureFieldComponent selected='false'>Pandaminer</ManufactureFieldComponent>
                <ManufactureFieldComponent selected='true'>Nvidia</ManufactureFieldComponent>
                <FilterFormFieldComponent type="simple-field">Minimum price</FilterFormFieldComponent>
                <FilterFormFieldComponent type="simple-field">Maximum price</FilterFormFieldComponent>
                <FilterFormFieldComponent type="simple-field">Search</FilterFormFieldComponent>
            </div>
        )
}

export default FilterFormComponent;