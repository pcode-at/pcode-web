import React from 'react';
import { Color } from '../Color.enum';
import { Box } from 'rebass';
import { Input, Textarea } from '@rebass/forms';
import { theme } from '../theme';
import { CONSTANTS } from '../shared/constants';
import styled from 'styled-components';
import { Button } from '../shared/components/Button';

type TContactFormProps = {
    className?: string;
};

export const ContactForm: React.FC<TContactFormProps> = ({ className }) => {
    const [textAreaContent, setTextAreaContent] = React.useState('');
    const { light, normal } = theme.font;
    const { openPositionDestinationEmail } = CONSTANTS;

    const StyledH2 = styled.h2`
        font-family: ${normal.fontFamily};
        font-weight: ${normal.fontWeight};
    `;

    const ShortInputLayout = styled(Box)`
        margin-top: 10px;
        width: 50%;
        font-family: ${light.fontFamily};
        font-weight: ${light.fontWeight};
    `;

    const TextAreaLayout = styled(Box)`
        height: 100px;
        margin-top: 10px;
        font-family: ${light.fontFamily};
        font-weight: ${light.fontWeight};
    `;

    const StyledInput = styled(Input)`
        border-width: 3px;
        border-color: ${theme.colors[Color.Secondary2]};
        border-radius: 13px;
    `;

    const StyledTextarea = styled(Textarea)`
        border-width: 3px;
        border-color: ${theme.colors[Color.Secondary2]};
        border-radius: 13px;
        height: 100%;
    `;

    const ContactButton = styled(Button)`
        float: right;
        margin-top: 10px;
    `;

    return (
        <div className={className}>
            <StyledH2>let's work together!</StyledH2>

            <ShortInputLayout>
                <StyledInput placeholder="name" />
            </ShortInputLayout>

            <ShortInputLayout>
                <StyledInput placeholder="email" />
            </ShortInputLayout>

            {/*TODO: Fix TextArea bug (you can't write anything)*/}
            <TextAreaLayout>
                <StyledTextarea
                    placeholder="you are so cool people, let`s …"
                    onChange={args => setTextAreaContent(args.target.value)}
                />
            </TextAreaLayout>
            <a
                href={`mailto:${openPositionDestinationEmail}?subject=Let's work together!
                        &body=${replaceNewLineCharacters(textAreaContent)}`}
            >
                <ContactButton variant="primary"  label={'send message'}/>
            </a>
        </div>
    );

    function replaceNewLineCharacters(inputText: string) {
        return inputText.replace('\n', '%0A');
    }
};
