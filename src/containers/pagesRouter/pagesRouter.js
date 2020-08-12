import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import HomePageContainer from '../homePageContainer/homePageContainer';

class PagesRouter extends React.Component {

    render() {

        return (
                <Switch>

                    <Route path="/main" component={HomePageContainer}/>
                    <Route render={() => <Redirect to="/main"/>}/>
                </Switch>
        );
    }
}

export default PagesRouter;