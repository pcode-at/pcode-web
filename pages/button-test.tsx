import * as React from 'react';
import { ActionButtonDeprecated } from '../components/ActionButtonDeprecated';
import { DeprecatedColor } from '../DeprecatedColor.enum';

const function01 = () => alert('hello 1');

const function02 = () => alert('hello 2');

const ButtonTestPage = () => (
    <div>
        <div className="test">WORKING</div>

        <hr></hr>

        <ActionButtonDeprecated
            color={DeprecatedColor.Primary}
            label="Primary"
            onClick={function01}
        ></ActionButtonDeprecated>

        <ActionButtonDeprecated
            color={DeprecatedColor.SecondaryDark}
            label="Secondary"
            onClick={function02}
        ></ActionButtonDeprecated>

        <ActionButtonDeprecated
            color={DeprecatedColor.SecondaryLight}
            label="Secondary 2"
        ></ActionButtonDeprecated>

        <style jsx>{`
            .test {
                color: green;
            }
        `}</style>
    </div>
);

export default ButtonTestPage;
