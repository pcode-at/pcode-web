import * as React from 'react';
import { Flex, Button, Box } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../theme';
import { SiteHeader } from '../components/SiteHeader';
import { DeprecatedColor } from '../Color.enum';

const HeaderTestPage = () => (
    <div>
        <SiteHeader color={DeprecatedColor.White}></SiteHeader>

        <p>Test Page for Header Menu</p>
        <div
            className="test"
            style={{
                border: '1px solid red',
                height: '100px',
                marginBottom: '10px',
            }}
        >
            WORKING BOX 01
        </div>
        <div
            className="test"
            style={{
                border: '1px solid red',
                height: '100px',
                marginBottom: '10px',
            }}
        >
            WORKING BOX 02
        </div>
        <div
            className="test"
            style={{
                border: '1px solid red',
                height: '100px',
                marginBottom: '10px',
            }}
        >
            WORKING BOX 03
        </div>
        <div
            className="test"
            style={{
                border: '1px solid red',
                height: '100px',
                marginBottom: '10px',
            }}
        >
            WORKING BOX 04
        </div>
        <div
            className="test"
            style={{
                border: '1px solid red',
                height: '100px',
                marginBottom: '10px',
            }}
        >
            WORKING BOX 05
        </div>
        <div
            className="test"
            style={{
                border: '1px solid red',
                height: '100px',
                marginBottom: '10px',
            }}
        >
            WORKING BOX 06
        </div>
        <div
            className="test"
            style={{
                border: '1px solid red',
                height: '100px',
                marginBottom: '10px',
            }}
        >
            WORKING BOX 07
        </div>
        <div
            className="test"
            style={{
                border: '1px solid red',
                height: '100px',
                marginBottom: '10px',
            }}
        >
            WORKING BOX 08
        </div>
        <div
            className="test"
            style={{
                border: '1px solid red',
                height: '100px',
                marginBottom: '10px',
            }}
        >
            WORKING BOX 09
        </div>
        <div
            className="test"
            style={{
                border: '1px solid red',
                height: '100px',
                marginBottom: '10px',
            }}
        >
            WORKING BOX 19
        </div>

        <div
            className="test"
            style={{
                border: '1px solid red',
                height: '100px',
                marginBottom: '10px',
            }}
        >
            WORKING BOX 11
        </div>
    </div>
);

export default HeaderTestPage;
