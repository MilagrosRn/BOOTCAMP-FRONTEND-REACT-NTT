import React from 'react';
import {
  FooterSection,
  FooterMenu,
  FooterContent,
  FooterText,
  FooterWidget,
  CopyrightArea,
} from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <footer>
      <FooterSection>
        <FooterContent>
        <FooterWidget>
                  <img src="assets/facebook.png" height="32px" />
                  <img src="assets/instagram.png" height="32px" />
                  <img src="assets/youtube.png" height="32px" />
            
          </FooterWidget>
          <FooterText>
          <p>No olvides seguirnos en redes</p>         
           </FooterText>
          
        </FooterContent>
      </FooterSection>
    

      <CopyrightArea>
        <p>Copyright &copy; Todos los derechos reservados</p>
    
        <FooterMenu>
        <li><a href="#">Home</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Policy</a></li>
                    <li><a href="#">Contact</a></li>
        </FooterMenu>
      </CopyrightArea>
      </footer>
  );
};

export default Footer;
