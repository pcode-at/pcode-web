import React from 'react';
import { Box, Text } from 'rebass';
import { PcodeShape } from './PcodeShape';
import { Color } from '../Color.enum';
import styled from 'styled-components';

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
        }, 3100);

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

    const WordListStyling = styled(Box)`
        position: relative;
        display: flex;
        align-items: center;
    `;

    const WordListLayout = styled(Box)`
        width: 100%;
    `;

    const CentralBoxLayout = styled(Box)`
        position: absolute;
        display: flex;
        width: 100%;
        justify-content: center;
        flex-direction: column;
    `;

    const ItemsBoxStyling = styled(Box)`
        font-size: 2rem;
        z-index: 1;
    `;

    const ItemsBoxLayout = styled(Box)`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const PcodeShapeBoxLayout = styled(Box)`
        width: 100%;
        justify-content: center;
        display: flex;
        margin-top: -6%;
    `;

    return (
        <div className={className}>
            <WordListLayout>
                <WordListStyling>
                    <CentralBoxLayout>
                        <ItemsBoxLayout>
                            <ItemsBoxStyling>
                                <div>{items}</div>
                            </ItemsBoxStyling>
                        </ItemsBoxLayout>
                    </CentralBoxLayout>
                    <PcodeShapeBoxLayout>
                        <PcodeShape width="300px" color={color} />
                    </PcodeShapeBoxLayout>
                </WordListStyling>
            </WordListLayout>
        </div>
    );
};
