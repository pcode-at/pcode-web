import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import { BubbleVariant } from '../shared/BubbleVariant.enum';

type Props = {
    layout?: BubbleVariant;
};

export const BubbleLayoutDeprecated: React.FC<Props> = ({
    layout = BubbleVariant.Shifted
}) => {

    switch(layout){
        case BubbleVariant.Shifted:
            let BubbleLayout = styled(Box)`
                margin-right: 4%;
            `;
        case BubbleVariant.Centered:            
            BubbleLayout = styled(Box)`
                transform: rotateZ(-195deg);
                margin-right: 1%;
            `;                      
    }

    return (
        <React.Fragment>
            <BubbleLayoutDeprecated/>
        </React.Fragment>
    );

    // let BubbleLayout = styled(Box)`
    //     margin-right: 4%;
    // `;

    // if ( layout === BubbleVariant.Centered ){
    //     BubbleLayout = styled(Box)`
    //         transform: rotateZ(-195deg);
    //         margin-right: 1%;
    //     `;
    // }

    // return (

    // );
};
