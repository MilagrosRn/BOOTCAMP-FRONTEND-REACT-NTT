import styled from 'styled-components';

export const FooterSection = styled.footer`
  background: white;
  position: relative;
  text-align:center
`;

export const FooterMenu = styled.div`
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

export const FooterPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;

  img {
    height: 100%;
    width: auto;
  }
`;

export const FooterLogo = styled.div`
  margin-bottom: 30px;

  img {
    max-width: 200px;
  }
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
  flex-direction: column;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: inline-block;
      width: 50%;
      margin-bottom: 12px;
    }
  }
`;

export const CopyrightArea = styled.div`
  background: #f4fae0;
  padding: 25px 0;

  p {
    margin: 0;
    font-size: 14px;
    color: #878787;

    a {
      color: #245229;
      text-decoration: none;
    }
  }
`;
