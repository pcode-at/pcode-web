import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { themeDeprecated } from '../../themeDeprecated';
import { SiteHeader } from '../../components/SiteHeader';
import { DeprecatedColor } from '../../DeprecatedColor.enum';
import { Statement } from '../../components/Statement';

const ProjectDetailPage = () => (
    <React.Fragment>
        <ThemeProvider theme={themeDeprecated}>
            <SiteHeader color={DeprecatedColor.White} />

            <Statement
                imagePath=""
                personName={'Christoph Pernsteiner'}
                personPosition={'CEO .founder'}
            >
                'this project was a great challenge, we learned a lot and it was
                a journey with such an amazing customer!'
            </Statement>
        </ThemeProvider>
    </React.Fragment>
);

export default ProjectDetailPage;
