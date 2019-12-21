import React from 'react';
import { Box, Text } from "rebass";
import { PcodeShape } from "./PcodeShape";
import { Color } from "../Color.enum";

type TWordList = {};

export const WordList: React.FC<TWordList> = ({}) => {
    const words = [
       'perfection',
       'praise',
       'passion',
       'potential',
       'people',
       'power',
    ];

    const [itemsToSlide, setItemsToSlide] = React.useState(() => words);

    React.useEffect(() => {
        const interval = setInterval(() => {
            let newSlide = [...itemsToSlide];

            let last = newSlide.pop();
            newSlide.unshift(last);

            setItemsToSlide(newSlide);
        }, 3000);

        return () => clearInterval(interval);
    }, [itemsToSlide]);

    const items = itemsToSlide.map((word, index) => {
        let opacity = index === 2 ? '100%' : '10%';
        let lastIndex = itemsToSlide.length - 1;
        let className = '';

        if (index === lastIndex) {
            className = 'fade-out'
        }

        if (index === 0) {
            className = 'fade-in'
        }

        return <Text
            className={className}
            color={Color.White}
            fontFamily="raleway"
            fontWeight={300}
            sx={{
                opacity: opacity,
                order: index
            }}>
            {word}
        </Text>

        // return <CopyText
        //     color={Color.White}
        //     opacity={index === 2 ? '100%': '10%'}>{word}
        // </CopyText>;
    });

    return (
        <React.Fragment>
            <Box sx={{ position:"relative", display: "flex", alignItems: "center", height: "300px", width: "100%" }}>
                <Box sx={{position: "absolute", display: "flex", justifyContent: "center", flexDirection: "column", width: "100%"}}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems:"center",
                        fontSize: "2rem"
                    }}>
                        <div id="words-slider">
                            {items}
                        </div>
                    </Box>
                </Box>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-6%",
                    zIndex: "-1"
                }}>
                    <PcodeShape width="300px"/>
                </Box>
            </Box>
        </React.Fragment>
    );
};
