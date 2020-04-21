import styled, {keyframes} from 'styled-components';



export const Wrap = styled.section`
    padding: 25px 0px;
    height: 100vh;
    min-height:800px;
    display: flex;
    align-items: center;
`;

export const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
export const LeftSection = styled.div`
    display: flex;
    position: relative;
    width: 90%;
    height: 40%;
    justify-content: flex-start;
    align-items: flex-end;
`;
export const RightSection = styled.div`
    display: flex;
    width: 90%;
    height: 40%;
    justify-content: center;
    align-items: center;
`;

const showAlert = keyframes`
    0% {
        opacity: 0;
        transform: translateX(29vw);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;
export const HiddenAlert = styled.div`
    height: 50%;
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 30px;
    min-width: 523px;
    width: 80%;
    background: rgba(255, 255, 255, 0.2);
    clip-path: polygon(100% 0, 88% 10%, 88% 50%, 20% 50%, 20% 0);
    &.visible {
        animation: 0.6s ${showAlert} linear forwards; 
    }
    &.hidden {
        transform: translateX(29vw);
        opacity: 0;
    }
`;
export const HiddenMessage = styled.p`
    width: 50%;
    font-size: 18px;
    margin-left: 50px;
    text-align: center;
    height: 20%;
    margin-top: 20px;
    color: pink;
    &.alert {
        margin-top: -20px;
    }
`;
export const H1 = styled.h1`
    font-size: 70px;
    width: 50%;
    min-width: 523px;
`;
export const H3 = styled.h3`
    width: 50%;
    min-width: 523px;
`;
export const Word = styled.p`
    width: 50%;
    text-align: right;
    margin-top: 10px;
    margin-right: 10px;
    min-width: 523px;
`;


export const WordingWrap = styled.div`
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: white;
    width: 90%;
`;

export const FormDiv = styled.div`
    background-color:rgba(72,72,72,0.4);
	padding-left:35px;
	padding-right:35px;
	padding-top:35px;
    padding-bottom:35px;
    min-width: 523px;
    width: 550px;
    height: auto;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
`
export const TxtArea = styled.textarea`
    width: 100%;
    height: 150px;
    line-height: 150%;
    resize:vertical;

    color:#3c3c3c;
    font-family: Helvetica, Arial, sans-serif;
    font-weight:500;
    font-size: 18px;
    border-radius: 0;
    background-color: #fbfbfb;
    padding: 13px 13px 13px 54px;
    margin-bottom: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    border: 3px solid rgba(0,0,0,0);
    background-image: url(http://rexkirby.com/kirbyandson/images/comment.svg);
    background-size: 30px 30px;
    background-position: 11px 8px;
    background-repeat: no-repeat;
`;
export const NewInput = styled.input`
    color:#3c3c3c;
    font-family: Helvetica, Arial, sans-serif;
    font-weight:500;
    font-size: 18px;
    border-radius: 0;
    line-height: 22px;
    background-color: #fbfbfb;
    padding: 13px 13px 13px 54px;
    margin-bottom: 10px;
    width:100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    &.name{
        background-image: url(http://rexkirby.com/kirbyandson/images/name.svg);
        background-size: 30px 30px;
        background-position: 11px 8px;
        background-repeat: no-repeat;
    }
    &.email{
        background-image: url(http://rexkirby.com/kirbyandson/images/email.svg);
        background-size: 30px 30px;
        background-position: 11px 8px;
        background-repeat: no-repeat;
    }
`;
export const SubmitDiv = styled.div`
    background-color: white;
    &:hover {
        color: #3498db;
        &:nth-of-type(2) {
            width:100%;
            background-color: white;
          }
    }
`;
export const InputBtn = styled.input`
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    float:left;
    width: 100%;
    border: #fbfbfb solid 4px;
    cursor:pointer;
    background-color: #3498db;
    color:white;
    font-size:24px;
    padding-top:22px;
    padding-bottom:22px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    margin-top:-4px;
    font-weight:700;
    &:hover{
        background-color: rgba(0,0,0,0);
	    color: #0493bd;
    }
`;
export const EaseDiv = styled.div`
    width: 0px;
    height: 80px;
    background-color: #fbfbfb;
    -webkit-transition: .3s ease;
    -moz-transition: .3s ease;
    -o-transition: .3s ease;
    -ms-transition: .3s ease;
    transition: .3s ease;
`;


/*
export const FormWrap = styled.form`
    display: flex;
    justify-content: center;
    width: 90%;
    height: 60%;
    flex-direction: column;
`;
export const FormRow = styled.div`
    display: flex;
    margin: 10px 0;
    margin-left: 10px;
    width: 100%;
`;
export const FormInput = styled.input`
    min-width: 400px;
    display: flex;
    min-height: 40px;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    &:focus {
        background: pink;
    }
`;
export const FormTxtArea = styled.textarea`
    border-radius: 10px;
    min-height: 100px;
    display: flex;
    min-width: 400px;
    width: 100%;
`;
export const SubmitBtn = styled.button`
    text-align: center;
    min-width: 400px;
    min-height: 40px;
    border-radius: 10px;
    border: none;
    width: 100%;
    color: white;
    background: #385F6E;
    text-shadow: 0 0 4px black;
    &:hover {
        background: #4FA3BC;
    }
`;
*/