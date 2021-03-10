import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex } from 'rebass';
import { themeDeprecated } from '../themeDeprecated';
import styled from 'styled-components';
import { PersonBubble } from './PersonBubble';

type Props = {
    personName: string;
    personPosition: string;
    color: Color;
    width?: string;
    className?: string;
    imagePath: string;
};

export const Statement2: React.FC<Props> = ({
    children,
    personName,
    personPosition,
    color = Color.Primary,
    imagePath,
    className,
}) => {
    const { light, normal } = themeDeprecated.font;

    const Statement2Layout = styled(Flex)`
        padding-top: 3em;
        padding-bottom: 3em;
        align-items: center;

        @media screen and (min-width: 615px) {
            justify-content: space-between;
            flex-direction: row;
        }
        @media screen and (max-width: 615px) {
            flex-direction: column;
        }
    `;

    const TextLayout = styled(Box)`
        padding: 10%;
        width: 70%;

        @media screen and (max-width: 615px) {
            padding: 0;
            width: 90%;
            margin-left: 10%;
            margin-right: 10%;
        }
    `;

    const TextStyle = styled(Box)`
        font-family: ${light.fontFamily};
        font-weight: ${normal.fontWeight};
        font-size: 150%;

        @media screen and (max-width: 615px) {
            text-align: center;
        }
    `;

    const PersonLayout = styled(Flex)`
        justify-content: center;

        @media screen and (min-width: 615px) {
            margin-right: 10%;
        }
    `;

    const StyledPersonFlex = styled(Flex)`
        align-items: center;
        flex-direction: column;
        justify-content: center;
    `;

    return (
        <div className={className}>
            <Statement2Layout>
                <TextLayout color={color}>
                    <TextStyle>
                        <p>{children}</p>
                    </TextStyle>
                </TextLayout>

                <PersonLayout>
                    <StyledPersonFlex>
                        <PersonBubble 
                            color={Color.SecondaryDark}
                            personName={personName}
                            personPosition={personPosition}
                            imageSource={imagePath}
                            variant={"shifted"}
                        />
                    </StyledPersonFlex>
                </PersonLayout>
            </Statement2Layout>
        </div>
    );
};
