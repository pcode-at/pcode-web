import React from 'react';

import WebSvg from '../assets/web.svg?sprite';
import MobileSvg from '../assets/mobile.svg?sprite';
import ArVrSvg from '../assets/ar-vr.svg?sprite';

import { PlatformType } from '../shared/PlatformType.enum';

type TPlatformProps = {
    type: PlatformType;
};

export const Platform: React.FC<TPlatformProps> = ({ type }) => {
    switch (type) {
        case PlatformType.Web: {
            return <WebSvg/>;
        }
        case PlatformType.Mobile: {
            return <MobileSvg/>;
        }
        case PlatformType.ArVr: {
            return <ArVrSvg/>;
        }
        default: {
            return <p>INVALID PLATFORM TYPE</p>;
        }
    }
};
