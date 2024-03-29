import React, { useRef } from 'react';
import {
  FirstName,
  LastName,
  FormWrapper,
  Input,
  InputFirstName,
  InputLastName,
  InputEmail,
  Email,
  Message,
  InputMessage,
  SendButton,
  FormContainer,
  Banner,
  ContactBody,
  Heading,
} from './Contact.elements';
import emailjs from '@emailjs/browser';
import { NavIcon, NavLogo } from '../Navbar/NavbarElement.Styles';
import Icon from './../../images/RLogo.svg';

const buttonClicked = () => {
  console.log('Testing one two three');
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uug4mbr',
        'template_6mwzbnq',
        form.current,
        'user_eDz6z61ypctV8WwCbGfsH'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactBody>
      <Banner>
        <NavLogo to="/">
          <img src={Icon} alt="React Logo" />
        </NavLogo>
      </Banner>
      <Heading>Kontakt</Heading>

      <FormWrapper ref={form} onSubmit={sendEmail}>
        <FormContainer>
          <FirstName>Fornavn</FirstName>
          <InputFirstName name="first_name" required></InputFirstName>
          <LastName>Etternavn</LastName>
          <InputLastName name="last_name" required></InputLastName>

          <Email>E-post</Email>
          <InputEmail name="user_email" required></InputEmail>

          <Message>Melding</Message>
          <InputMessage
            required
            name="user_message"
            placeholder="Skriv her..."
          ></InputMessage>

          <SendButton onClick={buttonClicked} type="submit" value="Send">
            Send
          </SendButton>
        </FormContainer>
      </FormWrapper>
    </ContactBody>
  );
};

export default Contact;
