import React from 'react';
import { Wrap } from './style';
import Carousel from '../../components/carousel';
import { WordingWrap, H1 , H3} from '../contact/style';
import { LeftSection } from '../contact/style';

const PortfolioSection = () => {
    return (
        <Wrap id={'portfolioSec'}>
            <LeftSection>
                <WordingWrap>
                    <H1>Portfolio</H1>
                    <H3>Got a project in mind? Lets get in touch!</H3>
                </WordingWrap>
            </LeftSection>
            <Carousel/>
        </Wrap>
    )
}

export default PortfolioSection;