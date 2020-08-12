import React from "react";
import PropTypes from "prop-types";

import './manufactureFieldComponent.scss';
import DotsComponent from '../../commonComponents/dotsComponent/dotsComponent';

class ManufactureFieldComponent extends React.PureComponent {

    static propTypes = {
        selected: PropTypes.string,
    };

    createClassName = () => {
        return this.props.selected === 'true' ? 'selected-manufacture' : null;
    };

    render() {
        return (
            <div className={`filter-manufacture-field ${this.createClassName()}`}>
                <DotsComponent/>
                {this.props.children}
            </div>
        )
    }
}

export default ManufactureFieldComponent;