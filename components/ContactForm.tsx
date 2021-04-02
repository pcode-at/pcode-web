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

    margin: '$xxs',

    width: '65%',

})

const ContactFormLabel = styled('label', {

    fontFamily: theme.ContactForm.Label.Font.Family,
    fontSize: theme.ContactForm.Label.Font.Size,
    fontWeight: '$semibold',
    lineHeight: theme.ContactForm.Label.LineHeight,
    letterSpacing: theme.ContactForm.Label.LetterSpacing,

    // fontFamily: '$default',
    // fontSize: '$xs',
    // fontWeight: '$semibold',
    // lineHeight: '$s',
    // letterSpacing: '$wide',
    // textAlign: 'left'
})

const HeadingLight = styled('h1', {

    marginRight: '15px',


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

    textAlign: 'center',

    // display: 'flex',
    // justifyContent: 'center',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // flexDirection: 'row',

    width: '100%',
})

const InputLayout = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '85%',

})

type Props = {
    className?: string;
};

export const ContactForm: React.FC<Props> = ({ className }) => {

    /** TODO:
     * - align labels to the left 
     * - input width 
     * - align button to the right 
     */

    const ContactFormLayout = styled('div', {
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
    })

    const ButtonLayout = styled('div', {
        display: 'flex',
        flexDirection: 'row',
    })

    return (
        <ContactFormLayout className={className}>
            {/* <HeadingLayout>
                <HeadingLight>lass uns</HeadingLight>
                <HeadingStrong>zusammen arbeiten!</HeadingStrong>
            </HeadingLayout> */}
            <Heading>lass uns zusammen arbeiten!</Heading>
            <InputLayout>
                <ContactFormLabel>Name</ContactFormLabel>
                <FormInput placeholder="Name"></FormInput>

                <ContactFormLabel>EMail</ContactFormLabel>
                <FormInput placeholder="EMail"></FormInput>

                <ContactFormLabel>Nachricht</ContactFormLabel>
                <FormInput placeholder="Hallo! Ich wollte euch nur mal sagen.."></FormInput>

                <ButtonLayout>
                    <Button variant={'tertiary'}>Abbrechen</Button>
                    <Button variant={'primaryRed'}>Senden</Button>
                </ButtonLayout>
            </InputLayout>
        </ContactFormLayout>


    );

}
