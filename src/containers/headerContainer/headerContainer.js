import React from "react";
import {translate} from "react-i18next";
import {compose} from "redux";
import {connect} from "react-redux";

import './headerContainer.scss';
import MenuComponent from '../../components/headerComponents/menuComponent/menuComponent';
import languages from '../../helper/languages';
import {openMenuChange} from '../../store/actions/openMenuActions';

class HeaderContainer extends React.PureComponent {

    constructor(props) {
        super();
        this.state = {
            lang: 'eng',
        }
    }

    componentDidMount() {
        this.props.i18n.changeLanguage('eng');
    };

    changeLanguage = () => {
        const newLang = languages[this.state.lang];
        this.setState({
            lang: newLang,
        }, () => this.props.i18n.changeLanguage(newLang));
    };

    checkOpenMenu = () => {
        return this.props.openMenuReducer.openMenu ? <MenuComponent/> : null;
    };

    switchOpenMenu = () => {
        this.props.dispatch(openMenuChange(this.props.dispatch, true));
    };

    render() {
        return (
            <div className="header-wrapper">
                <div className="header">
                    <div className="logo"><img src='images/logo.png' alt='logo'/></div>
                    <div className="lang">
                        <img src='images/planet-earth.svg' alt='earth-planet'/>
                        <span onClick={this.changeLanguage} className="lang-word">{this.state.lang.toUpperCase()}</span>
                    </div>

                    <div className="burger" onClick={this.switchOpenMenu}/>

                    <div className="user-info">
                        <div className="account">
                            <img className='user account-item-image' src='images/user.svg' alt='user'/>
                            <span>MY ACCOUNT</span>
                            <img className="account-arrow" src='images/arrowDown.svg' alt='arrow-down'/>
                        </div>
                        <div className='account-item'>
                            <img className='list add-space' src='images/list.svg' alt='list'/>
                            <img className="account-item-image" src='images/balance.svg' alt='balance'/>
                        </div>
                        <div className='account-item'>
                            <img className='list' src='images/list.svg' alt='list'/>
                            <img className="account-item-image" src='images/bell.svg' alt='bell'/>
                        </div>
                        <div className='account-item'>
                            <img className='list' src='images/list.svg' alt='list'/>
                            <span>3</span>
                            <img className="account-item-image" src='images/cart.svg' alt='cart'/>
                        </div>
                        <div className="mobile-cart"><img src='images/cart.svg' alt='cart'/></div>
                    </div>

                    <div className="submenu">
                        <div className="submenu-item slim">HOME</div>
                        <div className="submenu-item no-active">SELL</div>
                        <div className="submenu-item no-active no-active-mobile">M</div>
                    </div>
                </div>

                {this.checkOpenMenu()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        openMenuReducer: state.openMenuReducer,
    };
}

export default compose(translate("translations"), connect(mapStateToProps))(HeaderContainer);