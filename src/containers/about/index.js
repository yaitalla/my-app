import React from 'react';
import { HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeJsIcon, GithubIcon } from './Icons';
import yassine from '../../images/yassine.jpeg';
import { Wrap, LeftSide, RightSide, YassinePic, Text, IconRow} from './style';
import NameAnimation from '../../components/animation';

const AboutSection = () => {
    return (
        <Wrap id={'aboutSec'}>
            <LeftSide>
                <YassinePic src={yassine}/>
            </LeftSide>
            <RightSide>
                <NameAnimation/>
                <Text>Hi !</Text>
                <Text>I am a Web Developer</Text>
                <Text>I can build your online ambition using the latest web technologies.</Text>
                <IconRow>
                    <HtmlIcon/>
                    <CssIcon/>
                    <JsIcon/>
                    <ReactIcon/>
                    <NodeJsIcon/>
                    <GithubIcon/>
                </IconRow>
            </RightSide>
        </Wrap>
    )
}

export default AboutSection;