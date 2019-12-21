import React from 'react';
import { Box, Button } from 'rebass';
import { CopyText } from './CopyText';
import { Color } from '../Color.enum';
import { ActionButton } from './ActionButton';
import Logo from '../assets/pcode_shape.svg?sprite';

type TCookieMonsterBannerProps = {
    onClickAgreed?(): void;
    onClickDisagreed?(): void;
};

export const CookieMonsterBanner: React.FC<TCookieMonsterBannerProps> = ({
    onClickAgreed,
    onClickDisagreed,
}) => {
    // write some code

    return (
        <React.Fragment>
            <div className="opacity"></div>
            <div className="cookiewrapper">
                <div className="cookiebanner">
                    <div className="cookiemonster">
                        <Logo></Logo>
                    </div>
                    <div className="text">
                        <CopyText color={Color.White}>
                            We use cookies to personalise contents and ads, to
                            provide social media features and to analyse our
                            traffic. We also share information about your use of
                            our site with our social media, advertising and
                            analytics partners who may combine it with other
                            information that you've provided to them or that
                            they've collected from your use of heir services.
                            You consent to our cookies if you continue to your
                            website.{' '}
                        </CopyText>
                    </div>
                    <div className="buttons">
                        <Button
                            onClick={onClickAgreed}
                            style={{
                                background: '#2E3C58',
                                borderRadius: '15px',
                                cursor: 'pointer',
                                fontFamily: 'raleway',
                                marginLeft: '2vh',
                            }}
                        >
                            Yes, I Agree
                        </Button>
                        <Button
                            onClick={onClickDisagreed}
                            style={{
                                background: '#85C5C1',
                                borderRadius: '15px',
                                cursor: 'pointer',
                                fontFamily: 'raleway',
                                marginLeft: '2vh',
                            }}
                        >
                            Not sure!
                        </Button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .opacity {
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    background: #fff;
                    opacity: 0.7;
                }
                .cookiewrapper {
                    position: fixed;
                    height: 10%;
                }
                .cookiemonster {
                    width: 10%;
                    position: fixed;
                    margin-left: -35%;
                    margin-top: -12%;
                    z-index: 20;
                }
                .cookiebanner {
                    position: fixed;
                    bottom: 0;
                    background: #eb425f;
                    padding-top: 6%;
                    padding-bottom: 3%;
                    display: flex;
                    justify-content: space-around;
                    z-index: 10;
                }
                .buttons {
                    display: flex;
                    align-items: center;
                }
                .text {
                    width: 60%;
                    padding-left: 5%;
                    color: #fff;
                }
            `}</style>
        </React.Fragment>
    );
};
