import React, { useState } from 'react';
import { FormWrap, FormRow, FormInput, FormTxtArea, SubmitBtn } from './style';
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailCheck, setEmailCheck] = useState(false);
    const [message, setMessage] = useState('');
    
    const checkEmail = (str) => {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(str);
    }
    const updateName = (event) => { setName(event.target.value) }
    const updateEmail = (event) => {
        setEmail(event.target.value)
        setEmailCheck(checkEmail(email))
        // console.log('update: ', emailCheck)
    }
    const updateMsg = (event) => { setMessage(event.target.value) }
    
    const sendData = (event) => {
        const data = { name, email, message };
        event.preventDefault();
        if (emailCheck) {
            console.log('emailCheck: ', emailCheck)
            document.getElementById('emailAlert').classList.add('hidden')
            document.getElementById('emailAlert').classList.remove('visible')
            axios.post("http://localhost:4000/api/ftp/sendForm", data).then((res) => {
                console.log('server response: ',res.data)
            }).catch((err) => {
                console.log('YASLOG', err)
            });
        } else {
            // console.log('emailCheck: ', emailCheck)
            document.getElementById('emailAlert').classList.add('visible')
            document.getElementById('emailAlert').classList.remove('hidden')
        }
        
    }
    return (
        <FormWrap onSubmit={sendData} method="post">
            <FormRow>
                <FormInput onChange={updateName} placeholder={'   Enter your name'} ></FormInput>
            </FormRow>
            <FormRow>
                <FormInput onChange={updateEmail} placeholder={'   Enter your email'} ></FormInput>
            </FormRow>
            <FormRow>
                <FormTxtArea onChange={updateMsg} placeholder={'   ...message'} ></FormTxtArea>
            </FormRow>
            <FormRow>
                <SubmitBtn type={'submit'}  >Submit</SubmitBtn>
            </FormRow>
        </FormWrap>
    )
}

export default ContactForm;