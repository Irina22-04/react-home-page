import React from "react";

import './newsContainer.scss';
import TitleComponent from '../../components/commonComponents/titleComponent/titleComponent';

function newsContainer() {

    return (
        <div className="news">
            <TitleComponent class='news-title'>News</TitleComponent>
            <img src='images/banner.png' alt='banner'/>
        </div>
    )
}

export default newsContainer;