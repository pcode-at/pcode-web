import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
<<<<<<< HEAD
import { themeDeprecated } from '../../themeDeprecated';
=======
import { theme } from '../../themeDeprecated';
>>>>>>> a1406cc18eb21743f80ff948b98dccfbf89dd9ef
import { SiteHeader } from '../../components/SiteHeader';
import { Color } from '../../Color.enum';
import { Statement } from '../../components/Statement';

const ProjectDetailPage = () => (
    <React.Fragment>
        <ThemeProvider theme={themeDeprecated}>
            <SiteHeader color={Color.White} />

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
