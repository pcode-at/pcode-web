import React from 'react';

import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';
import { Color } from '../Color.enum';
import { theme } from '../theme';
import { WordList } from './WordList';
import styled from 'styled-components';
import { Box, Flex, Image } from 'rebass';

type TKeywordsWithImagesSliderProps = {
    wordList: string[][];
    imagePairs: string[][];
    alignment: string; // horizontal | vertical
    className?: string;
};

export const KeywordsWithImagesSlider: React.FC<TKeywordsWithImagesSliderProps> = ({
    wordList,
    imagePairs,
    alignment,
    className,
}) => {
    const [imagesToSlide, setImagesToSlide] = React.useState(() => imagePairs);
    const [wordsToSlide, setWordsToSlide] = React.useState(() => wordList);

    React.useEffect(() => {
        const interval = setInterval(() => {
            let shuffledImages = [...imagesToSlide];

            let last = shuffledImages.pop();
            shuffledImages.unshift(last);
            setImagesToSlide(shuffledImages);
        }, wordsToSlide[0].length * 3100);

        return () => clearInterval(interval);
    }, [imagesToSlide]);
    React.useEffect(() => {
        const interval = setInterval(() => {
            let shuffledWords = [...wordsToSlide];

            let last = shuffledWords.pop();
            shuffledWords.unshift(last);
            setWordsToSlide(shuffledWords);
        }, wordsToSlide[0].length * 3100);

        return () => clearInterval(interval);
    }, [wordsToSlide]);

    const KeywordsWithImagesSliderLayout = styled(Box)`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rosw: 1fr 1fr;
        grid-template-areas: ${alignment == 'horizontal'
            ? '"firstImg firstImg""secondImg secondImg"'
            : '"firstImg secondImg""condImg secondImg"'};
        position: relative;
    `;

    const StyledImageOne = styled(Image)`
        grid-area: firstImg;
        width: 100%;
    `;

    const StyledImageTwo = styled(Image)`
        grid-area: secondImg;
        width: 100%;
    `;

    const WordlistPositionLayout = styled(Box)`
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 1;
    `;

    return (
        <div className={className}>
            <KeywordsWithImagesSliderLayout>
                <StyledImageOne src={imagesToSlide[0][0]}></StyledImageOne>
                <StyledImageTwo src={imagesToSlide[0][1]}></StyledImageTwo>
                <WordlistPositionLayout>
                    <WordList
                        color={Color.Primary}
                        words={wordsToSlide[0]}
                    ></WordList>
                </WordlistPositionLayout>
            </KeywordsWithImagesSliderLayout>
        </div>
    );
};
