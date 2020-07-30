import styled from "styled-components";
import { narrowPage, yellow } from "../../styles.js";

export const FormInputBand = styled.div`
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-width: 100%;
  @media (max-width: ${narrowPage}) {
    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 3px solid #fff;
  background-color: rgba(0, 0, 0, 0);
  font-size: 1.25em;
  margin-bottom: 2em;
  max-width: 200px;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 2em;
`;

export const Form = styled.form`
  flex-grow: 1;
`;

export const Link = styled.a`
  color: ${yellow};
  text-decoration: none;
`;

export const submitButton = styled.button`
  background-color: ${yellow};
  border-radius: 39px;
  border: none;
  display: inline-block;
  color: #000;
  padding: 16px 31px;
  &:hover {
      filter: grayscale(20%);
  }
`;
