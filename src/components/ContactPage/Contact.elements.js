import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  line-height: 50px;
  margin: 20px;
  font-family: monospace;
  /* border: 2px solid red; */
  margin: 0;
  padding: 100px;
`;

export const FormContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  border: 2px #0a192f solid;
  border-radius: 20px;
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
