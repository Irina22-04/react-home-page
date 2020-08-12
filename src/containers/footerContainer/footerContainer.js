import React from "react";

import './footerContainer.scss';
import DotsComponent from '../../components/commonComponents/dotsComponent/dotsComponent';

function FooterContainer() {

    return (
        <div className="footer">
            <div className="footer-content-wrapper">

                <div className="review-wrapper">
                    <div className="review">
                        <div className="rating">4.9</div>
                        <div className="review-info">
                            <div className="review-text">Great service and prices!</div>
                            <div>
                        <span>
                            <img src='images/Star.svg' alt='star' width='10'/>
                            <img src='images/Star.svg' alt='star' width='10'/>
                            <img src='images/Star.svg' alt='star' width='10'/>
                            <img src='images/Star.svg' alt='star' width='10'/>
                            <img src='images/Star.svg' alt='star' width='10'/>
                        </span>
                                <span className="review-name">David Smith</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="social-networks-wrapper">
                    <div className="social-networks">
                        <div className="network">
                            <DotsComponent/>
                            <img src='images/facebook.svg' alt='facebook'/>
                        </div>
                        <div className="network">
                            <DotsComponent/>
                            <img src='images/twitter.svg' alt='twitter'/>
                        </div>
                        <div className="network">
                            <DotsComponent/>
                            <img src='images/youtube.svg' alt='youtube'/>
                        </div>
                        <div className="network">
                            <DotsComponent/>
                            <img src='images/reddit.svg' alt='reddit'/>
                        </div>
                    </div>
                </div>

                <div className="achievments-wrapper">
                    <div className="achievments">
                        <div className="achievement">
                            <img src='images/Achievment_gold.png' alt="Achievment_gold"/>
                        </div>
                        <div className="achievement">
                            <img src='images/Achievment_silver.png' alt="Achievment_silver"/>
                        </div>
                        <div className="achievement">
                            <img src='images/Achievment_platinum.png' alt="Achievment_platinum"/>
                        </div>
                        <div className="achievement">
                            <img src='images/Achievment_bronze.png' alt="Achievment_bronze"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterContainer;