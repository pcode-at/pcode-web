import React from 'react';
import { Flex } from 'rebass';
import { Color } from '../Color.enum';
import Logo from '../assets/pcode_shape.svg?sprite';
import styled from 'styled-components';
import { Text } from '../shared/components/Text';
import { Button } from '../shared/components/Button';
import { theme } from '../theme';

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
    const OpacityLayout = styled.div`
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        opacity: 0.7;
    `;

    const BannerLayout = styled.div`
        position: fixed;
        bottom: 0;
        background: #eb425f;
        padding: 6% 5% 3%;
        display: flex;
        justify-content: space-around;
    `;

    const ButtonsSectionLayout = styled.div`
        display: flex;
        align-items: center;
    `;

    const LogoLayout = styled.div`
        width: 10%;
        position: fixed;
        margin-left: -35%;
        margin-top: -12%;
        z-index: 20;
    `;

    const InfoTextLayout = styled.div`
        margin-right: ${theme.space[4]};
    `;

    const ButtonLayout = styled.div`
        min-width: 120px;
        margin-right: ${theme.space[2]};
    `;

    const InfoTextAndButtonLayout = styled(Flex)`
        @media screen and (max-width: ${theme.breakpoints[0]}) {
            flex-direction: column;
            align-items: center;
        }
    `;

    return (
        <div className={className}>
            <OpacityLayout />

            <BannerLayout>
                <LogoLayout>
                    <Logo />
                </LogoLayout>

                <InfoTextAndButtonLayout>
                    <InfoTextLayout>
                        <Text color={Color.White} variant={'light'}>
                            We use cookies to personalise contents and ads, to
                            provide social media features and to analyse our
                            traffic. We also share information about your use of
                            our site with our social media, advertising and
                            analytics partners who may combine it with other
                            information that you've provided to them or that
                            they've collected from your use of heir services.
                            You consent to our cookies if you continue to your
                            website.{' '}
                        </Text>
                    </InfoTextLayout>

                    <ButtonsSectionLayout>
                        <ButtonLayout>
                            <Button
                                variant={'secondary'}
                                onClick={onClickAgreed}
                                label={'Yes, I Agree'}
                            />
                        </ButtonLayout>
                        <ButtonLayout>
                            <Button
                                label={'Not sure!'}
                                variant={'secondary2'}
                                onClick={onClickDisagreed}
                            />
                        </ButtonLayout>
                    </ButtonsSectionLayout>
                </InfoTextAndButtonLayout>
            </BannerLayout>
        </div>
    );
};
