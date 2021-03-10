import React from 'react';
import { Color } from '../Color.enum';
import { Box, Text, Button } from 'rebass';
import { Input, Textarea } from '@rebass/forms';
<<<<<<< HEAD
import { themeDeprecated } from '../themeDeprecated';
=======
import { theme } from '../themeDeprecated';
>>>>>>> a1406cc18eb21743f80ff948b98dccfbf89dd9ef
import { CONSTANTS } from '../shared/constants';
import styled from 'styled-components';

type Props = {
    className?: string;
};

export const ContactForm: React.FC<Props> = ({ className }) => {
    const [textAreaContent, setTextAreaContent] = React.useState('');
    const { light, normal } = themeDeprecated.font;
    const { openPositionDestinationEmail } = CONSTANTS;

    const StyledH2 = styled.h2`
        font-family: ${normal.fontFamily};
        font-weight: ${normal.fontWeight};
    `;

    const ShortInputLayout = styled(Box)`
        margin-top: 10px;
        width: 50%;
    `;

    const ShortInputStyle = styled(Box)`
        font-family: ${light.fontFamily};
        font-weight: ${light.fontWeight};
    `;

    const TextAreaLayout = styled(Box)`
        height: 100px;
        margin-top: 10px;
    `;

    const TextAreaStyle = styled(Box)`
        font-family: ${light.fontFamily};
        font-weight: ${light.fontWeight};
    `;

    return (
        <div className={className}>
            <StyledH2>let's work together!</StyledH2>

            <ShortInputLayout>
                <ShortInputStyle>
                    <Input
                        placeholder="name"
                        sx={{
                            borderWidth: '3px',
                            borderColor: Color.SecondaryLight,
                            borderRadius: 13,
                        }}
                    />
                </ShortInputStyle>
            </ShortInputLayout>

            <ShortInputLayout>
                <ShortInputStyle>
                    <Input
                        placeholder="email"
                        sx={{
                            borderWidth: '3px',
                            borderColor: Color.SecondaryLight,
                            borderRadius: 13,
                        }}
                    />
                </ShortInputStyle>
            </ShortInputLayout>

            {/*TODO: Fix TextArea bug (you can't write anything)*/}
            <TextAreaLayout>
                <TextAreaStyle>
                    <Textarea
                        placeholder="you are so cool people, let`s …"
                        onChange={args => setTextAreaContent(args.target.value)}
                        sx={{
                            borderWidth: '3px',
                            borderColor: Color.SecondaryLight,
                            borderRadius: 13,
                            height: '100%',
                        }}
                    />
                </TextAreaStyle>
            </TextAreaLayout>
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
