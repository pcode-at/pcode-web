import React from 'react';
import { styled } from '../stitches.config';
import { theme } from '../theme';
import { Button } from './Button';

const FormInput = styled('input', {
    alignSelf: 'center',
    borderColor: '$blue500',
    borderStyle: 'solid',
    borderRadius: '$rounded',
    fontFamily: '$default',
    fontSize: '$m',
    color: '$blue500',
    fontWeight: '$medium',
    lineHeight: '$m',
    margin: '$xs 0px',
    width: '49%',
})

const ContactFormLabel = styled('label', {
    fontFamily: '$default',
    fontSize: '$xs',
    fontWeight: '$semibold',
    lineHeight: '$s',
    letterSpacing: '$wide',
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
        fontFamily: '$default',
        color: '$blue500',
        fontSize: '$xxl',
        lineHeight: '$xxl',
        letterSpacing: '$tight',
    }
})

const Heading = styled('h1', {
    fontFamily: '$default',
    color: '$blue500',
    fontSize: '$xxl',
    lineHeight: '$xxl',
    letterSpacing: '$tight',
    fontWeight: '$light',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: '$m 0px $s',
    // width: '100%',
    width: '85%',
})

type Props = {
    className?: string;
};

// TODO: align buttons correctly ; currently they're centered
// TODO: correct width of input fields ; currently they're too broad
export const ContactForm: React.FC<Props> = ({ className }) => {

    const ContactFormLayout = styled('div', {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',

    })

    const InputFieldsLayout = styled('div', {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '85%',
    })

    const InputFieldLayout = styled('div', {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '$m 0px',
        width: '100%',
    })

    const LabelLayout = styled('div', {
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
                    <LabelLayout>
                        <ContactFormLabel>Name</ContactFormLabel>
                    </LabelLayout>
                    <FormInput/>
                </InputFieldLayout>

                <InputFieldLayout>
                    <LabelLayout>
                        <ContactFormLabel>EMail</ContactFormLabel>
                    </LabelLayout>
                    <FormInput/>
                </InputFieldLayout>

                <InputFieldLayout>
                    <LabelLayout>
                        <ContactFormLabel>Nachricht</ContactFormLabel>
                    </LabelLayout>
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
