import React from 'react';
import { Color } from '../Color.enum';
import { Text, Heading } from 'rebass';

type TSectionHeadlineProps = {
    color: Color;
    headlinePartOne: string;
    headlinePartTwo: string;
    separateWithBreak?: boolean;
    maxWidthPartTwo?: string;
};

export const SectionHeadline: React.FC<TSectionHeadlineProps> = ({
    headlinePartOne,
    headlinePartTwo,
    color,
    separateWithBreak = false,
    maxWidthPartTwo,
}) => {
    const defaultProps = {
        color,
        fontFamily: 'raleway',
        display: 'inline',
        // fontSize: "1.4rem"
    };

    return (
        // TODO: heading with spans
        <React.Fragment>
            <Heading fontFamily="raleway" color={color}>
                <span className="headline-part-one">{headlinePartOne}</span>
                &nbsp;
                {separateWithBreak && <br />}
                <span className="headline-part-two">{headlinePartTwo}</span>
            </Heading>

            <style jsx>{`
                .headline-part-one {
                    font-weight: 500;
                }
                .headline-part-two {
                    display: ${maxWidthPartTwo ? 'block' : 'inline'};
                    max-width: ${maxWidthPartTwo};
                    font-weight: 300;
                }
            `}</style>
        </React.Fragment>
    );
};
