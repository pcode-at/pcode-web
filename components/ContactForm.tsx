import React from 'react';
import { styled } from '../stitches.config';
import { theme } from '../theme';
import { Button } from './Button';

const FormInput = styled('input', {
    borderColor: theme.ContactForm.Border.Color.Default,
    borderStyle: 'solid',
    borderRadius: theme.ContactForm.Border.Radius,

    fontFamily: theme.ContactForm.Input.Font.Family,
    fontSize: theme.ContactForm.Input.Font.Size,
    color: theme.ContactForm.Input.Font.Color,
    fontWeight: '$medium',
    lineHeight: theme.ContactForm.Input.LineHeight,

    margin: '$xs 0px',
    width: '65%',
    alignSelf: 'center',
})

const ContactFormLabel = styled('label', {
    fontFamily: theme.ContactForm.Label.Font.Family,
    fontSize: theme.ContactForm.Label.Font.Size,
    fontWeight: '$semibold',
    lineHeight: theme.ContactForm.Label.LineHeight,
    letterSpacing: theme.ContactForm.Label.LetterSpacing,
})

const HeadingLight = styled('h1', {
    // marginRight: '15px',
})
const HeadingStrong = styled('h1', {
    fontWeight: '$semibold',
})
const HeadingLayout = styled('div', {

    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',

    '>h1':{
        fontFamily: theme.ContactForm.H1.Font.Family,
        color: theme.ContactForm.H1.Font.Color,
        fontSize: theme.ContactForm.H1.Font.Size,
        lineHeight: theme.ContactForm.H1.LineHeight,
        letterSpacing: theme.ContactForm.H1.LetterSpacing,
    }
})

const Heading = styled('h1', {
    fontFamily: theme.ContactForm.H1.Font.Family,
    color: theme.ContactForm.H1.Font.Color,
    fontSize: theme.ContactForm.H1.Font.Size,
    lineHeight: theme.ContactForm.H1.LineHeight,
    letterSpacing: theme.ContactForm.H1.LetterSpacing,
    fontWeight: '$light',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: '$m 0px $s',
    width: '100%',
})

type Props = {
    className?: string;
};

export const ContactForm: React.FC<Props> = ({ className }) => {

    /** TODO:
     * - align labels 
     * - align button to the right 
     */

    const ContactFormLayout = styled('div', {
        // width: '85%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',

    })

    const InputFieldsLayout = styled('div', {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
    })

    const InputFieldLayout = styled('div', {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        // margin: '$m 0px',
        margin: '32px 0px',
        width: '49%',
    })

    const ButtonsLayout = styled('div', {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        margin: '$m 0px',

        '> button': {
            marginRight: '10px',
        },
    })

    return (
        <ContactFormLayout className={className}>
            <Heading>lass uns zusammen arbeiten!</Heading>
            <InputFieldsLayout>
                <InputFieldLayout>
                    <ContactFormLabel>Name</ContactFormLabel>
                    <FormInput/>
                </InputFieldLayout>

                <InputFieldLayout>
                    <ContactFormLabel>EMail</ContactFormLabel>
                    <FormInput/>
                </InputFieldLayout>

                <InputFieldLayout>
                    <ContactFormLabel>Nachricht</ContactFormLabel>
                    <FormInput/>
                </InputFieldLayout>

                <ButtonsLayout>
                    <Button variant={'tertiary'}>Abbrechen</Button>
                    <Button variant={'primaryRed'}>Senden</Button>
                </ButtonsLayout>
            </InputFieldsLayout>
        </ContactFormLayout>


    );

}
