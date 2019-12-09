import * as React from 'react';
import { ActionButton } from '../components/ActionButton';
import { Color } from '../Color.enum';

const function01 = () => alert('hello 1');

const function02 = () => alert('hello 2');

const ButtonTestPage = () => (
    <div>
        <div className="test">WORKING</div>

        <hr></hr>

        <ActionButton
            thisColor={Color.Primary}
            label="Primary"
            onClick={function01}
        ></ActionButton>

        <ActionButton
            thisColor={Color.Secondary}
            label="Secondary"
            onClick={function02}
        ></ActionButton>

        <ActionButton
            thisColor={Color.Secondary2}
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
