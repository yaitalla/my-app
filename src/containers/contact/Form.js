import React, { useState } from 'react';
import { NewInput, TxtArea, EaseDiv, FormDiv, SubmitDiv, InputBtn } from './style';
import axios from 'axios';
import '../../css/index.css'

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
        <FormDiv>
            <form onSubmit={sendData} method="post">
                    <NewInput onChange={updateName}  className={"name"} placeholder={"Name"}/>
                    <NewInput onChange={updateEmail} className={"email"} placeholder={"Email"}/>
                    <TxtArea onChange={updateMsg} className={"name"} placeholder={"Message"}/>
                <SubmitDiv className={"submit"} >
                    <InputBtn type={"submit"} value={"SEND"} />
                    <EaseDiv className={"ease"}  />
                </SubmitDiv>
            </form>
        </FormDiv>
    )
}

export default ContactForm;