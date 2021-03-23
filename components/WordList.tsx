import React from 'react';
import { Box, Text } from 'rebass';
import { Bubble } from './Bubble';
import { DeprecatedColor } from '../DeprecatedColor.enum';
import styled from 'styled-components';

export const intervalDuration: number = 3100;

type Props = {
    color?: DeprecatedColor;
    words: Array<string>;
    className?: string;
};

export const WordList: React.FC<Props> = ({
    words,
    color = DeprecatedColor.Primary,
    className,
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
            color: ${DeprecatedColor.White};
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

    const WordListLayout = styled(Box)`
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
    `;

    const CentralLayout = styled(Box)`
        position: absolute;
        display: flex;
        width: 100%;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    `;

    const ItemsLayout = styled(Box)`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const PcodeShapeLayout = styled(Box)`
        width: 100%;
        justify-content: center;
        display: flex;
        margin-top: -6%;
    `;

    return (
        <div className={className}>
            <WordListLayout>
                <CentralLayout>
                    <ItemsLayout>
                        <div>{items}</div>
                    </ItemsLayout>
                </CentralLayout>
                <PcodeShapeLayout>
                    <Bubble width="300px" color={color} />
                </PcodeShapeLayout>
            </WordListLayout>
        </div>
    );
};
