import React from 'react';
import { Button, Flex } from 'rebass';
import { CopyText, FontStyle } from './CopyText';
import { Color } from '../Color.enum';
import Logo from '../assets/pcode_shape.svg?sprite';
import styled from 'styled-components';

type TCookieMonsterBannerProps = {
    onClickAgreed?(): void;
    onClickDisagreed?(): void;
    className?: string;
};

export const CookieMonsterBanner: React.FC<TCookieMonsterBannerProps> = ({
    onClickAgreed,
    onClickDisagreed,
    className,
}) => {
    const OpacityDiv = styled.div`
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        opacity: 0.7;
    `;

    const BannerWrapperDiv = styled.div`
        position: fixed;
        bottom: 0;
        background: #eb425f;
        padding: 6% 5% 3%;
        display: flex;
        justify-content: space-around;
    `;

    const ButtonWrapper = styled.div`
        display: flex;
        align-items: center;
    `;

    const StyledLogo = styled(Logo)`
        width: 10%;
        position: fixed;
        margin-left: -35%;
        margin-top: -12%;
        z-index: 20;
    `;

    const StyledCopyTextForCookieInfo = styled(CopyText)`
        margin-right: 5%;
    `;

    return (
        <div className={className}>
            <OpacityDiv />

            <BannerWrapperDiv>
                <StyledLogo />

                <Flex
                    sx={{
                        '@media screen and (max-width: 615px)': {
                            flexDirection: 'column',
                            alignItems: 'center',
                        },
                    }}
                >
                    <StyledCopyTextForCookieInfo
                        color={Color.White}
                        fontStyle={FontStyle.Light}
                    >
                        We use cookies to personalise contents and ads, to
                        provide social media features and to analyse our
                        traffic. We also share information about your use of our
                        site with our social media, advertising and analytics
                        partners who may combine it with other information that
                        you've provided to them or that they've collected from
                        your use of heir services. You consent to our cookies if
                        you continue to your website.{' '}
                    </StyledCopyTextForCookieInfo>

                    <ButtonWrapper>
                        <Button
                            onClick={onClickAgreed}
                            style={{
                                minWidth: '120px',
                                background: '#2E3C58',
                                borderRadius: '15px',
                                cursor: 'pointer',
                                fontFamily: 'raleway',
                            }}
                        >
                            Yes, I Agree
                        </Button>
                        <Button
                            onClick={onClickDisagreed}
                            style={{
                                minWidth: '105px',
                                background: '#85C5C1',
                                borderRadius: '15px',
                                cursor: 'pointer',
                                fontFamily: 'raleway',
                                marginLeft: '2vh',
                            }}
                        >
                            Not sure!
                        </Button>
                    </ButtonWrapper>
                </Flex>
            </BannerWrapperDiv>
        </div>
    );
};
