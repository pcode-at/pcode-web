import React from 'react';

import { Color } from '../Color.enum';
import { ActionButton } from './ActionButton';
import { SectionHeadline } from './SectionHeadline';

type TSwiperProps = {
    color?: Color;
    textPartOne: string;
    textPartTwo: string;
    onClick(): void;
};

export const Swiper: React.FC<TSwiperProps> = ({
    textPartOne,
    textPartTwo,
    color = Color.Secondary,
    onClick,
}) => {
    return (
        <React.Fragment>
            <div className="text-button-wrapper">
                <div className="text-wrapper">
                    <SectionHeadline
                        color={color}
                        headlinePartOne={textPartOne}
                        headlinePartTwo={textPartTwo}
                        separateWithBreak={true}
                    />
                </div>
                <ActionButton
                    thisColor={Color.Secondary2}
                    padding="0.2rem 1.7rem"
                    label="learn more"
                    onClick={onClick}
                />
            </div>

            <style jsx>{`
                .text-button-wrapper {
                    width: 300px;
                    padding: 0 2rem;
                }
                .text-wrapper {
                    margin-bottom: 0.7rem;
                }
                .wrapper {
                    padding: 1em;
                }
            `}</style>
        </React.Fragment>
    );
};
