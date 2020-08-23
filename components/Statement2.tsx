import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex } from 'rebass';
import { theme } from '../theme';
import styled from 'styled-components';
import { PersonWithFunction } from './PersonWithFunction';

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
    const { light, normal } = theme.font;

    const Wrapper = styled(Flex)`
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

    const TextWrapper = styled(Box)`
        padding: 10%;
        width: 70%;
        font-family: ${light.fontFamily};
        font-weight: ${normal.fontWeight};
        font-size: 150%;

        @media screen and (max-width: 615px) {
            padding: 0;
            width: 90%;
            text-align: center;
            margin-left: 10%;
            margin-right: 10%;
        }
    `;

    const PersonWrapper = styled(Flex)`
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
            <Wrapper>
                <TextWrapper color={color}>
                    <p>{children}</p>
                </TextWrapper>

                <PersonWrapper>
                    <StyledPersonFlex>
                        <PersonWithFunction
                            color={color}
                            personName={personName}
                            personPosition={personPosition}
                            imagePath={imagePath}
                        />
                    </StyledPersonFlex>
                </PersonWrapper>
            </Wrapper>
        </div>
    );
};
