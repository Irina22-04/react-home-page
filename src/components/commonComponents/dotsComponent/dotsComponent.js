import React from "react";

import './dotsComponent.scss';

function DotsComponent() {

        return (
            <React.Fragment>
                <div className='dot left-top-dot'/>
                <div className='dot right-top-dot'/>
                <div className='dot left-bottom-dot'/>
                <div className='dot right-bottom-dot'/>
            </React.Fragment>
        )
}

export default DotsComponent;