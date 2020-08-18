import React from 'react';
import { Box, Text } from 'rebass';
import { PcodeShape } from './PcodeShape';
import { Color } from '../Color.enum';
import styled from 'styled-components';

export const intervalDuration: number = 3100;

type TWordList = {
    color?: Color;
    words: Array<string>;
    className?: string;
};

export const WordList: React.FC<TWordList> = ({
    words,
    className,
    color = Color.Primary,
}) => {
    const [itemsToSlide, setItemsToSlide] = React.useState(() => words);
    const middleWordIndex = parseInt((itemsToSlide.length / 2).toFixed(0)) - 1;

    React.useEffect(() => {
        const interval = setInterval(() => {
            let shuffledWords = [...itemsToSlide];

            let last = shuffledWords.pop();
            shuffledWords.unshift(last);

            setItemsToSlide(shuffledWords);
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [itemsToSlide]);

    const items = itemsToSlide.map((word, index) => {
        let opacity = index === middleWordIndex ? '100%' : '10%';
        let animation = 'animated infinite slower ';

        const StyledWordText = styled(Text)`
            font-weight: 300;
            font-family: 'raleway', serif;
            color: ${Color.White};
            opacity: ${opacity};
            order: ${index};
        `;

        return (
            <StyledWordText
                className={
                    index === middleWordIndex ? animation + 'fadeIn' : animation
                }
                key={word}
            >
                {word}
            </StyledWordText>
        );
    });

    const WrapperBox = styled(Box)`
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
    `;

    const CentralWrapperBox = styled(Box)`
        position: absolute;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    `;

    const ItemsWrapperBox = styled(Box)`
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2rem;
        z-index: 1;
    `;

    const PcodeShapeWrapperBox = styled(Box)`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: -6%;
    `;

    return (
        <div className={className}>
            <WrapperBox>
                <CentralWrapperBox>
                    <ItemsWrapperBox>
                        <div>{items}</div>
                    </ItemsWrapperBox>
                </CentralWrapperBox>
                <PcodeShapeWrapperBox>
                    <PcodeShape width="300px" color={color} />
                </PcodeShapeWrapperBox>
            </WrapperBox>
        </div>
    );
};
