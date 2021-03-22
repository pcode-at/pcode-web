import * as React from 'react';
import { ActionButton } from '../components/ActionButton';
import { DeprecatedColor } from '../Color.enum';

const function01 = () => alert('hello 1');

const function02 = () => alert('hello 2');

const ButtonTestPage = () => (
    <div>
        <div className="test">WORKING</div>

        <hr></hr>

        <ActionButton
            color={DeprecatedColor.Primary}
            label="Primary"
            onClick={function01}
        ></ActionButton>

        <ActionButton
            color={DeprecatedColor.SecondaryDark}
            label="Secondary"
            onClick={function02}
        ></ActionButton>

        <ActionButton
            color={DeprecatedColor.SecondaryLight}
            label="Secondary 2"
        ></ActionButton>

        <style jsx>{`
            .test {
                color: green;
            }
        `}</style>
    </div>
);

export default ButtonTestPage;
