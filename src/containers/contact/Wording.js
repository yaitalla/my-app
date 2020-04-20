import React from 'react';
import { WordingWrap, H1, H3, Word, HiddenAlert, HiddenMessage } from './style';

const Wording = () => {
    return (
        <WordingWrap>
           <H1>Contact</H1>
           <H3>Got a project in mind? Lets get in touch!</H3>
           <Word>just fill the form and check your emails</Word>
            <HiddenAlert id={'emailAlert'} className={'hidden'} >
                <HiddenMessage>please enter a valid email</HiddenMessage>
                <HiddenMessage className={'alert'} >/!\</HiddenMessage>
            </HiddenAlert>
        </WordingWrap>
    )
}

export default Wording;