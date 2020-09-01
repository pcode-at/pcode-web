import React from 'react';
import { Color } from '../Color.enum';
import { theme } from '../theme';
import { CONSTANTS } from '../shared/constants';
import styled, { css, breakpoints } from '@xstyled/styled-components';
import { ActionButton } from './ActionButton';

type Props = {
    className?: string;
};

export const ContactForm: React.FC<Props> = ({ className }) => {
    const [textAreaContent, setTextAreaContent] = React.useState('');
    const { light, normal } = theme.font;
    const { openPositionDestinationEmail } = CONSTANTS;

    const StyledH2 = styled.h2`
        font-family: normal;
        font-weight: normal;
    `;

    const ShortInputLayout = styled.div`
        font-family: light;
        font-weight: light;
        margin-top: 10px;
        width: 50%;
    `;

    const TextAreaLayout = styled.div`
        font-family: normal;
        font-weight: light;
        height: 100px;
        margin-top: 10px;
    `;

    const StyledInput = styled.input`
        border-radius: 13px;
        border: solid 3px ${theme.colors[Color.Secondary2]};
        padding: extraSmall small;
    `;

    //Fix design and layout component
    const StyledTextarea = styled.textarea`
        border-radius: 13px;
        border: solid 3px ${theme.colors[Color.Secondary2]};
        height: 100%;
        padding: small;
        width: 100%;
    `;

    const ActionButtonLayout = styled.div`
        float: right;
        left: 10px;
        position: relative;
        top: -15px;
        z-index: 2;
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
            <ActionButtonLayout>
                <a
                    href={`mailto:${openPositionDestinationEmail}?subject=Let's work together!
                        &body=${replaceNewLineCharacters(textAreaContent)}`}
                >
                    <ActionButton label="send message" padding="4px 20px" />
                </a>
            </ActionButtonLayout>
        </div>
    );

    function replaceNewLineCharacters(inputText: string) {
        return inputText.replace('\n', '%0A');
    }
};
