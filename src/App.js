import React from 'react';

import './App.scss';
import PagesRouter from './containers/pagesRouter/pagesRouter';
import HeaderContainer from './containers/headerContainer/headerContainer';
import FooterContainer from './containers/footerContainer/footerContainer';

function App() {
    return (
        <React.Fragment>
            <HeaderContainer/>
            <PagesRouter/>
            <FooterContainer/>
        </React.Fragment>
    );
}

export default App;
