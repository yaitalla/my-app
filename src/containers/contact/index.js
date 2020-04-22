import React, {useEffect} from 'react';
import { Wrap, LeftSection, RightSection, FormWrapper } from './style';
import ContactForm from './Form';
import Wording from './Wording';

const Contact = () => {
    useEffect(() => {
        // const d = new Date();
        // document.getElementById("clock").innerHTML = d.toLocaleTimeString();
});
    return (
        <Wrap id={'contactSec'}>
            <FormWrapper>
                <LeftSection>
                    <Wording/>
                </LeftSection>
                <RightSection>
                    <ContactForm/>
                </RightSection>
            </FormWrapper>
        </Wrap>
    )
}

export default Contact;