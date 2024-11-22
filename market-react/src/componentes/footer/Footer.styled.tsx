import styled from 'styled-components';

export const FooterSection = styled.footer`
  background: white;
  position: relative;
  text-align:center;
  background-color: #f4fae0;
}
`;

export const FooterMenu = styled.div`
text-align: center;
    li{
    display: inline-block;
    margin-left: 20px;
    &:hover{
        color: #245229;
    }
    a{
      color: #878787;
      font-size: 14px;
  
  }
`;


export const FooterContent = styled.div`
  position: relative;
  z-index: 2;
`;


export const FooterText = styled.div`

  p {
    
    margin-bottom: 14px;
    font-size: 14px;
    color: #7e7e7e;
    line-height: 28px;
  }
`;

export const FooterWidget = styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;

  img {
    margin: 12px;
    padding: 0;
    list-style: none;  
  }
`;

export const CopyrightArea = styled.div`
  background: #f4fae0;
  padding: 25px 0;

  p {
    margin: 0;
    font-size: 14px;
    color: #878787;
    text-align: center;

  }
`;
