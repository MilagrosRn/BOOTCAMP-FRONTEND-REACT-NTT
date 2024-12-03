import styled from "styled-components";

export const FormInput = styled.input`
  width: 100%;
  border: 1px solid;
  padding: 5px;
  margin-bottom: 10px;
  min-height: 36px;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  &:focus {
    color: #ff0081;
  }
`;
export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

export const BtnComprar = styled.button`
  font-family: "Helvetica", "Arial", sans-serif;
  display: inline-block;
  font-size: 1em;
  padding: 16px;
  margin-bottom: 1%;
  appearance: none;
  background-color: #ff0081;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);
`;


export const StyledLink = styled.a`
  color: #ff0081;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;
export const StyledCancelButton = styled.button`
  margin-top: 10px;
  background: none;
  border: none;
  color: #ff0081;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;
export const AlertMessage = styled.p`
color: green;
margin-top: 10px;
font-size: 0.9em;
`;
export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 80vh;
flex-direction:column;
`;

export const Logo = styled.img`
  height: 50px;    
  margin: 27px;
}
  @media (max-width: 768px) {
      height:30px
    }
`;

