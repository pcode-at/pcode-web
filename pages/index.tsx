import * as React from 'react';

import { theme } from '../theme';
import { ThemeProvider } from 'emotion-theming';
import { Color } from '../Color.enum';
import { LightStatement } from '../components/LightStatement';

const MainPage = () => (
    <LightStatement
        textAndPcodeShapeColor={Color.Primary}
        variant="imageLeft"
        position="normal"
        imagePath="../static/pernsteiner_christoph.png"
    >
        we are adapting to new challenges by developing and investing in our
        people
    </LightStatement>
);

export default MainPage;
