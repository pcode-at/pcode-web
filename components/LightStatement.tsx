import React from 'react';
import { Color } from '../Color.enum';
import { styled } from '../stitches.config';
import { PcodeShapeWithImage } from './PcodeShapeWithImage';

type lightStatementVariant = 'imageRight' | 'imageLeft';
type lightStatementPosition = 'normal' | 'bottom';

type Props = {
    textAndPcodeShapeColor: Color;
    variant: lightStatementVariant;
    imagePath: string;
    position?: lightStatementPosition;
    className?: string;
};

export const LightStatement: React.FC<Props> = ({
    children,
    textAndPcodeShapeColor,
    variant,
    imagePath,
    position = 'normal',
    className,
}) => {
    const LightStatementLayout = styled('div', {
        display: 'grid',
        variants: {
            horizontalPosition: {
                imageLeft: {},
                imageRight: {},
            },
        },
        tablet: {
            padding: '0 $medium',
            variants: {
                horizontalPosition: {
                    imageLeft: {
                        gridTemplateColumns: '1fr 3fr',
                    },
                    imageRight: {
                        gridTemplateColumns: '3fr 1fr',
                    },
                },
            },
        },
        desktop: {
            padding: '0 $ultraLarge',
        },
    });

    const PcodeShapeWithImageGrid = styled(PcodeShapeWithImage, {
        gridColumn: '1/2',
        gridRow: '1/2',
        padding: '0 medium',
        variants: {
            horizontalPosition: {
                imageLeft: {},
                imageRight: {},
            },
        },
        tablet: {
            padding: '0',
            variants: {
                horizontalPosition: {
                    imageLeft: {
                        gridColumn: '1/2',
                    },
                    imageRight: {
                        gridColumn: '2/3',
                    },
                },
            },
        },
    });

    const StatementText = styled('p', {
        color: `$${textAndPcodeShapeColor}`,
        fontFamily: '$normal',
        fontSize: '$headline5',
        lineHeight: '$normal',
        margin: 0,
        textAlign: 'center',

        variants: {
            horizontalPosition: {
                imageLeft: {},
                imageRight: {},
            },
        },
        tablet: {
            variants: {
                horizontalPosition: {
                    imageLeft: {
                        textAlign: 'left',
                    },
                    imageRight: {
                        textAlign: 'right',
                    },
                },
            },
        },
        desktop: {
            fontSize: '$headline4',
        },
    });

    const StatementTextLayout = styled('div', {
        gridRow: '2/3',
        marginTop: '$medium',
        tablet: {
            display: 'flex',
            flexDirection: 'column',
            gridRow: '1/2',

            variants: {
                horizontalPosition: {
                    imageLeft: {
                        gridColumn: '2/3',
                    },
                    imageRight: {
                        gridColumn: '1/2',
                    },
                },
                verticalPosition: {
                    normal: {},
                    bottom: {},
                },
            },
        },

        variants: {
            horizontalPosition: {
                imageLeft: {},
                imageRight: {},
            },
            verticalPosition: {
                normal: {
                    justifyContent: 'center',
                },
                bottom: {
                    justifyContent: 'flex-end',
                },
            },
        },
    });

    StatementTextLayout.compoundVariant(
        {
            horizontalPosition: 'imageLeft',
            verticalPosition: 'bottom',
        },
        {
            paddingLeft: '$small',
        },
    );

    StatementTextLayout.compoundVariant(
        {
            horizontalPosition: 'imageLeft',
            verticalPosition: 'normal',
        },
        {
            paddingLeft: '$large',
        },
    );

    StatementTextLayout.compoundVariant(
        {
            horizontalPosition: 'imageRight',
            verticalPosition: 'bottom',
        },
        {
            paddingRight: '$small',
        },
    );

    StatementTextLayout.compoundVariant(
        {
            horizontalPosition: 'imageRight',
            verticalPosition: 'normal',
        },
        {
            paddingRight: '$large',
        },
    );

    return (
        <div className={className}>
            <LightStatementLayout horizontalPosition={variant}>
                <PcodeShapeWithImageGrid
                    color={textAndPcodeShapeColor}
                    imageSource={imagePath}
                    variant={1}
                    horizontalPosition={variant}
                ></PcodeShapeWithImageGrid>
                <StatementTextLayout
                    horizontalPosition={variant}
                    verticalPosition={position}
                >
                    <StatementText horizontalPosition={variant}>
                        '{children}'
                    </StatementText>
                </StatementTextLayout>
            </LightStatementLayout>
        </div>
    );
};
