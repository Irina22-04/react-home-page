import React from "react";
import PropTypes from "prop-types";

import './filterFormFieldComponent.scss';
import DotsComponent from '../../commonComponents/dotsComponent/dotsComponent';
import ArrowDownComponent from '../../commonComponents/ArrowDownComponent/arrowDownComponent';
import ArrowUpComponent from '../../commonComponents/arrowUpComponent/arrowUpComponent';

class FilterFormFieldComponent extends React.PureComponent {

    static propTypes = {
        type: PropTypes.string,
    };

    createClassName = () => {
        switch (this.props.type) {
            case('close-field'):
                return 'close-field';
            case('open-field'):
                return 'open-field';
            default:
                return 'simple-field';
        }
    };

    createArrow = () => {
        switch (this.props.type) {
            case('close-field'):
                return <ArrowDownComponent/>;
            case('open-field'):
                return <ArrowUpComponent/>;
            default:
                return null;
        }
    };

    render() {
        return (
            <div className={`filter-form-field ${this.createClassName()}`}>
                <DotsComponent/>
                {this.props.children}
                {this.createArrow()}
            </div>
        )
    }
}

export default FilterFormFieldComponent;