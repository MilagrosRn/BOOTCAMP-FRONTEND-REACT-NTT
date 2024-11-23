import styled from "styled-components";

export const FormContainer = styled.div`    
    width: 80%;

}`;
export const FormInput = styled.input`    
    width: 100%;
    border: 1px solid;
    padding: 5px;
    margin-bottom:10px;
    min-height: 36px;
    border-radius: 5px;
    color: black;
    cursor:pointer;
        &:focus {
        color: #ff0081;
        }

}`;


export const FormSelect = styled.select`    
border: 1px solid;
    padding: 5px;
    margin-bottom:10px;
    min-height: 36px;
    border-radius: 5px;
    color: black;
    cursor:pointer;
        &:focus {
        color: #ff0081;
        }

}`;

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
    box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);}`;
    
    export const FormTitle = styled.h1`
font-size:1rem;
text-align:center
}`;
       
