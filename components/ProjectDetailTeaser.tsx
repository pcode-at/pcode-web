import React from 'react';

type TProjectDetailTeaserProps = {
    headline: string;
    description: string;
    imageSrc: string;
    pcodeShapeBackground: boolean;
};

export const ProjectDetailTeaser: React.FC<TProjectDetailTeaserProps> = ({
    description,
    headline,
    imageSrc,
    pcodeShapeBackground,
}) => {
    // write some code

    return (
        <div className="pcode-shape-background">
            <h1>{headline}</h1>
            <p>{description}</p>
            <img src={imageSrc} />

            <style jsx>{`
                .pcode-shape-background {
                    background: ${pcodeShapeBackground
                        ? 'green'
                        : 'transparent'};
                }
            `}</style>
        </div>
    );
};
