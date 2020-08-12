import React from "react";
import PropTypes from "prop-types";

import './titleComponent.scss';

class TitleComponent extends React.PureComponent {

    static propTypes = {
        class: PropTypes.string,
    };

    createClassName = () => {
        return this.props.class ? this.props.class : '';
    };

    render() {
        return (
            <div className={`title ${this.createClassName()}`}>
                <div className="title-name">
                    {this.props.children.toUpperCase()}
                </div>
            </div>
        )
    }
}

export default TitleComponent;