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

    const StatementLayout = styled(Flex)`
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

    const TextLayout = styled(Flex)`
        padding: 10%;
        width: 70%;

        @media screen and (max-width: 615px) {
            padding: 0;
            width: 90%;
            margin-left: 10%;
            margin-right: 10%;
        }
    `;

    const TextStyle = styled(Flex)`
        font-family: ${light.fontFamily};
        font-weight: ${normal.fontWeight};
        font-size: 250%;
        color: ${color};

        @media screen and (max-width: 615px) {
            text-align: center;
        }
    `;

    const PersonLayout = styled(Box)`
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
            <StatementLayout backgroundColor={backgroundColor}>
                <TextLayout>
                    <TextStyle>
                        <p>{children}</p>
                    </TextStyle>
                </TextLayout>

                <PersonLayout>
                    <StyledPersonFlex>
                        <PersonWithFunction
                            color={Color.Secondary}
                            personName={personName}
                            personPosition={personPosition}
                            imagePath={imagePath}
                        />
                    </StyledPersonFlex>
                </PersonLayout>
            </StatementLayout>
        </div>
    );
};
