import React from 'react';
import { CopyText, FontStyle } from './CopyText';
import { Color } from '../Color.enum';
import Logo from '../assets/pcode_shape.svg?sprite';
import styled, { css, breakpoints } from '@xstyled/styled-components';
import { ActionButton } from './ActionButton';

type Props = {
    onClickAgreed?(): void;
    onClickDisagreed?(): void;
    className?: string;
};

export const CookieMonsterBanner: React.FC<Props> = ({
    onClickAgreed,
    onClickDisagreed,
    className,
}) => {
    const OpacityDiv = styled.div`
        background: #fff;
        bottom: 0;
        height: 100%;
        opacity: 0.7;
        position: fixed;
        width: 100%;
    `;

    const BannerWrapperDiv = styled.div`
        background: #eb425f;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        padding: 6% 5% 3%;
        position: fixed;
    `;

    const ButtonWrapper = styled.div`
        align-items: center;
        display: flex;
    `;

    const StyledLogo = styled(Logo)`
        margin-left: -35%;
        margin-top: -12%;
        position: fixed;
        width: 10%;
        z-index: 20;
    `;

    const StyledCopyTextForCookieInfo = styled(CopyText)`
        margin-right: 10%;
        width: 60%;
    `;

    const StyledFlexBox = styled.div(
        breakpoints({
            allDevices: css`
                align-items: center;
                display: flex;
                flex-direction: column;
            `,
            tablet: css`
                align-items: initial;
                flex-direction: row;
            `,
        }),
    );

    const RightActionButtonPadding = styled.div`
        margin-left: medium;
    `;

    return (
        <div className={className}>
            <OpacityDiv />

            <BannerWrapperDiv>
                <StyledLogo />

                <StyledFlexBox>
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
                        your use of their services. You consent to our cookies
                        if you continue to your website.{' '}
                    </StyledCopyTextForCookieInfo>

                    <ButtonWrapper>
                        <ActionButton
                            onClick={onClickAgreed}
                            color={Color.Secondary}
                            label="Yes, I Agree"
                        />
                        <RightActionButtonPadding>
                            <ActionButton
                                onClick={onClickDisagreed}
                                color={Color.Secondary2}
                                label="Not sure!"
                            />
                        </RightActionButtonPadding>
                    </ButtonWrapper>
                </StyledFlexBox>
            </BannerWrapperDiv>
        </div>
    );
};
