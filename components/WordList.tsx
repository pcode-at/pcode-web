import React from 'react';
import { Box, Text } from 'rebass';
import { PcodeShape } from './PcodeShape';
import { Color } from '../Color.enum';

type TWordList = {
    words: Array<string>
};

export const WordList: React.FC<TWordList> = ({ words }) => {
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

        return <Text
            className={index === middleWordIndex ? animation + 'fadeIn' : animation}
            color={Color.White}
            fontFamily="raleway"
            fontWeight={300}
            key={word}
            sx={{
                opacity: opacity,
                order: index,
            }}>
            {word}
        </Text>;
    });

    return (
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', height: '300px', width: '100%' }}>
            <Box sx={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100%',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontSize: '2rem',
                }}>
                    <div>{items}</div>
                </Box>
            </Box>
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '-6%',
                zIndex: '-1',
            }}>
                <PcodeShape width="300px"/>
            </Box>
        </Box>
    );
};
