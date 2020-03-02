import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex } from 'rebass';
import { theme } from '../theme';
import styled from 'styled-components';
import { PersonWithFunction } from './PersonWithFunction';

type TStatementProps = {
    personName: string;
    personPosition: string;
    color?: Color;
    backgroundColor?: Color;
    pCodeShapeColor?: Color;
    className?: string;
    imagePath: string;
};

export const Statement: React.FC<TStatementProps> = ({
    children,
    personName,
    personPosition,
    color = Color.White,
    backgroundColor = Color.Secondary2,
    imagePath,
    className,
}) => {
    const { light, normal } = theme.font;

    const Wrapper = styled(Flex)`
        padding-top: 3em;
        padding-bottom: 3em;
        align-items: center;

        @media screen and (min-width: ${theme.breakpoints[0]}) {
            justify-content: space-between;
            flex-direction: row;
        }
        @media screen and (max-width: ${theme.breakpoints[0]}) {
            flex-direction: column;
        }
    `;

    const TextWrapper = styled(Flex)`
        padding: 10%;
        width: 70%;
        font-family: ${light.fontFamily};
        font-weight: ${normal.fontWeight};
        font-size: 250%;
        color: ${color};

        @media screen and (max-width: ${theme.breakpoints[0]}) {
            padding: 0;
            width: 90%;
            text-align: center;
            margin-left: 10%;
            margin-right: 10%;
        }
    `;

    const PersonWrapper = styled(Box)`
        justify-content: center;

        @media screen and (min-width: ${theme.breakpoints[0]}) {
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
            <Wrapper backgroundColor={backgroundColor}>
                <TextWrapper>
                    <p>{children}</p>
                </TextWrapper>

                <PersonWrapper>
                    <StyledPersonFlex>
                        <PersonWithFunction
                            color={Color.Secondary}
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
