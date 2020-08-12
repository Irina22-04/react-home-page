import React from "react";
import { translate} from "react-i18next";
import {connect} from "react-redux";
import {compose} from "redux";

import './menuComponent.scss';
import {openMenuChange} from "../../../store/actions/openMenuActions";

class MenuComponent extends React.PureComponent {

    switchCloseMenu = () => {
        this.props.dispatch(openMenuChange(this.props.dispatch, false));
    };

    render() {
        const {t} = this.props;
        return (
            <div className="menu">
                <div onClick={this.switchCloseMenu} className="menu-center burger-close">
                    <img src='images/hamburger-close.svg' alt='burger button'/>
                </div>
                <div className="menu-center menu-item slim-word">{t('home')}</div>
                <div className="menu-center menu-square"><img src='images/square.svg' alt='square'/></div>
                <div className="menu-center menu-item whide-word">{t('sell')}</div>
                <div className="menu-center menu-square"><img src='images/square.svg' alt='square'/></div>
                <div className="menu-center menu-item slim-word">{t('host')}</div>
                <div className="menu-center menu-square"><img src='images/square.svg' alt='square'/></div>
                <div className="menu-center menu-item">{t('aboutUs')}</div>
                <div className="menu-center menu-square"><img src='images/square.svg' alt='square'/></div>
                <div className="menu-center menu-item">{t('support')}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        openMenuReducer: state.openMenuReducer,
    };
}

export default compose(translate("translations"), connect(mapStateToProps))(MenuComponent);