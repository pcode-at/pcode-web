import React from 'react';
import { Color } from '../Color.enum';
import { Box, Text, Button } from 'rebass';
import { Input, Textarea } from '@rebass/forms';
import { theme } from '../theme';
import { CONSTANTS } from '../shared/constants';
import styled from 'styled-components';

type TContactFormProps = {
    color: Color;
    className?: string;
};

export const ContactForm: React.FC<TContactFormProps> = ({
    children,
    color,
    className
}) => {
    const [textAreaContent, setTextAreaContent] = React.useState('');
    const { light, normal } = theme.font;
    const { openPositionDestinationEmail } = CONSTANTS;

    return (
        <div className={className}>
            <h2>let's work together!</h2>
            <Input
                placeholder="name"
                sx={{
                    borderWidth: '3px',
                    borderColor: Color.Secondary2,
                    borderRadius: 13,
                    maxWidth: 300,
                    fontFamily: light.fontFamily,
                    fontWeight: light.fontWeight,
                }}
            />
            <Input
                placeholder="email"
                sx={{
                    borderWidth: '3px',
                    borderColor: Color.Secondary2,
                    borderRadius: 13,
                    marginTop: 25,
                    maxWidth: 300,
                    fontFamily: light.fontFamily,
                    fontWeight: light.fontWeight,
                }}
            />

            <Textarea
                placeholder="you are so cool people, let`s ……"
                onChange={args => setTextAreaContent(args.target.value)}
                sx={{
                    borderWidth: '3px',
                    borderColor: Color.Secondary2,
                    borderRadius: 13,
                    marginTop: 25,
                    maxWidth: 700,
                    height: 100,
                    fontFamily: light.fontFamily,
                    fontWeight: light.fontWeight,
                }}
            />

            <a
                href={`mailto:${openPositionDestinationEmail}?subject=Let's work together!
                        &body=${replaceNewLineCharacters(textAreaContent)}`}
            >
                <Button
                    variant="primary"
                    sx={{
                        float: 'right',
                        marginTop: 1,
                        borderRadius: 20,
                        fontFamily: light.fontFamily,
                        fontWeight: light.fontWeight,
                        fontSize: 11,
                    }}
                >
                    send message
                </Button>
            </a>
        </div>
    );

    function replaceNewLineCharacters(inputText: string) {
        return inputText.replace('\n', '%0A');
    }
};
