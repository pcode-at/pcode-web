import React from 'react';

import WebSvg from '../assets/web.svg?sprite';
import MobileSvg from '../assets/mobile.svg?sprite';
import ArVrSvg from '../assets/ar-vr.svg?sprite';

import { PlatformType } from '../shared/PlatformType.enum';

type Props = {
    type: PlatformType;
    className?: string;
};

export const Platform: React.FC<Props> = ({ type, className }) => {
    switch (type) {
        case PlatformType.Web: {
            return (
                <div className={className}>
                    <WebSvg />
                </div>
            );
        }
        case PlatformType.Mobile: {
            return (
                <div className={className}>
                    <MobileSvg />
                </div>
            );
        }
        case PlatformType.ArVr: {
            return (
                <div className={className}>
                    <ArVrSvg />
                </div>
            );
        }
        default: {
            return <p>INVALID PLATFORM TYPE</p>;
        }
    }
};
