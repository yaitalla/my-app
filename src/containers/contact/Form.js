import React, { useState , useEffect} from 'react';
import { NewInput, TxtArea, EaseDiv, FormDiv, SubmitDiv, InputBtn } from './style';
import {useInterval} from './useInterval';
import '../../css/index.css'

const ContactForm = () => {
    const [date] = useState(new Date());
    const [time, setTime] = useState(0)
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
        event.preventDefault();
        console.log('emailCheck: ', emailCheck)
        const template_params = {
            "name": name,
            "email": email,
            "email_checked": checkEmail(email),
            "message": message,
             "connected": date.toLocaleTimeString(),
             "date": date.toLocaleDateString(),
             "time": time
         }
         const service_id = "default_service";
         const template_id = "yassine.com_automail";
         if (emailCheck){
            window.emailjs.send(service_id, template_id, template_params);
            console.log("email sent")
         }
    }

    useInterval(() => {
        const convertSeconds = (sec) => {
            const hrs = Math.floor(sec / 3600);
            const min = Math.floor((sec - (hrs * 3600)) / 60);
            let seconds = sec - (hrs * 3600) - (min * 60);
            seconds = Math.round(seconds * 100) / 100
            let result = (hrs < 10 ? "0" + hrs : hrs);
            result += "h" + (min < 10 ? "0" + min : min);
            result += "m" + (seconds < 10 ? "0" + seconds : seconds);
            result += "s";
            return result;
         }
        const d = new Date();
        const m = (convertSeconds(Math.floor((d - date)/1000)))
        setTime(m)
    }, 1000)
    useEffect(() => {
        // console.log(date.toLocaleDateString())
        // document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    });
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