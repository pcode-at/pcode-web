import React from 'react';
import { PcodeShape } from './PcodeShape';
import { Color } from '../Color.enum';
import styled, { css, breakpoints } from '@xstyled/styled-components';
import { theme } from '../theme';

type Props = {
    color?: Color;
    words: Array<string>;
    className?: string;
};

export const WordList: React.FC<Props> = ({
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

        const StyledWordText = styled.p`
            color: ${Color.White};
            font-family: normal;
            font-size: headline3;
            font-weight: 300;
            line-height: ${theme.fontSizes.headline4}px;
            margin: 0;
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

    const WordListLayout = styled.div`
        align-items: center;
        display: flex;
        position: relative;
        width: 100%;
    `;

    const CentralLayout = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        width: 100%;
    `;

    const ItemsLayout = styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        z-index: 1;
    `;

    const PcodeShapeLayout = styled.div`
        display: flex;
        justify-content: center;
        margin-top: -6%;
        width: 100%;
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
                    <PcodeShape width="300px" color={color} />
                </PcodeShapeLayout>
            </WordListLayout>
        </div>
    );
};
