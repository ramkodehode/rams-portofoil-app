import styled from 'styled-components';

export const Banner = styled.nav`
  background: #0a192f;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const ContactBody = styled.div`
  background: #0a192f;
  color: #8892b0;
  font-family: monospace;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  line-height: 50px;
  margin: 20px;
  font-family: monospace;
  /* border: 2px solid red; */
  margin: 0;
  padding: 50px;
  color: #8892b0;
`;

export const FormContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
  border: 2px #00ffffff solid;
  border-radius: 20px;
`;

export const Heading = styled.h1`
  font-size: 38px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #ccd6f6;
`;

export const FirstName = styled.label``;
export const LastName = styled.label``;
export const Email = styled.label``;
export const Message = styled.label``;

export const InputFirstName = styled.input`
  padding: 10px;
`;
export const InputLastName = styled.input`
  padding: 10px;
`;
export const InputEmail = styled.input`
  padding: 10px;
`;

export const InputMessage = styled.textarea`
  padding: 10px;
`;

export const SendButton = styled.button`
  padding: 10px;
  color: #0a192f;
  margin-top: 20px;
`;
