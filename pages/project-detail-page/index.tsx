import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../../theme';
import { SiteHeader } from '../../components/SiteHeader';
import { Color } from '../../Color.enum';
import { Statement } from '../../components/Statement';

const ProjectDetailPage = () => (
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <SiteHeader color={Color.White} />

            {/*<Statement
                personName={'Christoph Pernsteiner'}
                personPosition={'CEO .founder'}
                imagePath={'../../'}
            >
                'this project was a great challenge, we learned a lot and it was
                a journey with such an amazing customer!'
            </Statement>*/}
        </ThemeProvider>
    </React.Fragment>
);

export default ProjectDetailPage;
