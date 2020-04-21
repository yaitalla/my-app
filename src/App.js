import React from 'react';
import styled from 'styled-components';
import Navbar from './components/navbar';
import AboutSection from './containers/about';
import PortfolioSection from './containers/portfolio';
import ContactSection from './containers/contact';
import FooterSection from './containers/footer';

const Wrap = styled.div`
    position: relative;
    min-width: 900px;
    background: linear-gradient(180deg, rgba(40,44,52,1) 0%, rgba(97,218,251,1) 100%);
`;

function App() {
  return (
    <Wrap data-spy={"scroll"} data-target={"#yasNavbar"}>
      <Navbar/>
      <AboutSection/>
      <PortfolioSection/>
      <ContactSection/>
      <FooterSection/>
    </Wrap>
  );
}

export default App;
