import React from 'react';
import { PcodeShape } from '../components/PcodeShape';
import { Color } from '../Color.enum';
import { Box, Button, Flex } from 'rebass';
import { ActionButton } from './ActionButton';
import { CopyText } from './CopyText';
import { SectionHeadline } from './SectionHeadline';

type TProjectDetailTeaserProps = {
    headline: string;
    description: string;
    imageSrc: string;
    headlineColor: Color;
    onClick?(): void;
};

export const ProjectDetailTeaser: React.FC<TProjectDetailTeaserProps> = ({
    description,
    headline,
    imageSrc,
    headlineColor,
    onClick
}) => {


    return (
        <div className="pcode-shape-background">
            <Flex alignItems="center" justifyContent="space-between">
                <Box
                    width={2/6}>
                    <Box sx={{position: 'relative', marginLeft: "-40%"}}
                    className="pCodeShape"
                    width="100%">
                        <PcodeShape color={Color.Primary} width="100%"/>
                        <img src={imageSrc} width="50%" className="image" />
                    </Box>
                </Box>
                <Box
                    width={4/6}
                    sx={{position: 'relative', textAlign: "left"}}>
                    <Box marginBottom="1rem">
                        <SectionHeadline color={headlineColor} headlinePartOne={headline} headlinePartTwo=""/>
                    </Box>
                    <Box marginBottom="1rem" width="50%">
                        <CopyText color={Color.Secondary}>
                            {description}>
                        </CopyText>
                    </Box>
                    <ActionButton label="learn more" thisColor={Color.Secondary2} onClick={onClick}/>
                </Box>
            </Flex>

            <style jsx>{`
                .image {
                    position: absolute;
                    top: 50%;
                    transform: translateX(-50%) translateY(-50%);
                }
            `}</style>
        </div>
    );
};
