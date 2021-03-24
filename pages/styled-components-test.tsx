import React from 'react';
import styled from 'styled-components';
import { themeDeprecated } from '../themeDeprecated';
import { ContactForm } from '../components/ContactForm';
import { DeprecatedColor } from '../DeprecatedColor.enum';

const { light, normal } = themeDeprecated.font;

const Home = () => (
    <Container>
        <Heading>hi there</Heading>
        <StyledContactForm />
    </Container>
);

const Container = styled.div`
    width: 960px;
    height: 100vh;
    margin: 2rem auto;
    padding: 2rem;
    background: #f2f2f2;
`;

const StyledContactForm = styled(ContactForm)`
    width: 100px;
`;

const Heading = styled.h1`
    color: blue;
`;

export default Home;
