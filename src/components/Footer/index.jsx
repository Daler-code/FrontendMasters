import React from 'react';

import { 
  Container, 
  Row, 
  Brand, 
  Col1, 
  SubRow, 
  SubCol,
  Heading,
  Links,
  ImageWrapper,
  HR,
  SubCol2,
  Row2,
  TextWrapper,
  H6,
  H7,
  Hashlink,
  Tel
} from './styles';

import ImageFooter from '../../assets/images/footer.png';


const Footer = () => {
  return (
    <Container>
      <Brand>The <span>Devs</span></Brand>
      <Row>
        <Col1>
          <SubRow> 
              <SubCol>
                <Heading>Service Links</Heading>
                <Links to='our-porfolio'>Our Portfolio</Links>
                <Hashlink to='#3'>Pricing</Hashlink>
                <Hashlink to='#1'>Courses</Hashlink>
              </SubCol>
              <SubCol>
                <Heading>Links</Heading>
                <Links to='/about'>About us</Links>
                <Links to='process-of-study'>Process of study</Links>
                <Hashlink to='#2'>Our Benefits</Hashlink>
              </SubCol>
          </SubRow>
          <SubCol2>
            <Heading>Contacts</Heading>
            <Tel href="tel:99895-479-0770">+998 90 909 09 09</Tel>
            <Links to='#'>example@gmail.com</Links>
          </SubCol2>
        </Col1>
        <ImageWrapper>
          <img src={ImageFooter} alt="footer"/>
        </ImageWrapper>
      </Row>
      <HR />
      <Row2>
        <H7>© Copyright 2020 The Devs. All Rights Reserved.</H7>
        <TextWrapper>
          <H6 to="/terms-and-service">Terms of Service</H6>
          <H6 to="/privacy-policy">Privacy Policy</H6>
        </TextWrapper>
      </Row2>
    </Container>
  )
};

export default Footer;
