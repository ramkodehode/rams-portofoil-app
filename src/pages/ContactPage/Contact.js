import React from "react";
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
} from "./Contact.elements";

const buttonClicked = () => {
  console.log("Testing one two three");
};

const Contact = ({ submitForm }) => {
  return (
    <FormWrapper>
      <FormContainer>
        <FirstName>Fornavn</FirstName>
        <InputFirstName></InputFirstName>
        <LastName>Etternavn</LastName>
        <InputLastName></InputLastName>

        <Email>E-post</Email>
        <InputEmail required></InputEmail>

        <Message>Melding</Message>
        <InputMessage placeholder="Skriv her..."></InputMessage>

        <SendButton onClick={buttonClicked} type="submit" value="Send">
          Send
        </SendButton>
      </FormContainer>
    </FormWrapper>
  );
};

export default Contact;
