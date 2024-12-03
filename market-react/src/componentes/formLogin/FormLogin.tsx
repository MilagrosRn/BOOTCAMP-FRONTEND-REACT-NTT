import { useState } from "react";
import { FormInput, BtnComprar, StyledCancelButton, StyledLink, AlertMessage, Container, Logo, ErrorMessage } from "./FormLogin.styles";
import ModalOverlay from "../modalOverlay/ModalOverlay";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.tsx/authContext";
import { loginService } from "../../services/auth.service";


const FormLogin: React.FC  = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    setIsModalOpen(true);
  };
  const handleRedirect = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/"); 
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setShowAlert(false);
  };

  const handleSend = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, ingrese un correo válido.");
      setShowAlert(false);
    } else {
      setError("");
      setShowAlert(true);
    }
  };

  const validateForm = () => {
    if (!username.trim()) {
      setError("El nombre de usuario es obligatorio.");
      return false;
    }
    if (!password.trim()) {
      setError("La contraseña es obligatoria.");
      return false;
    }
    setError(null); 
    return true;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true); 
    try {
      const userData = await loginService({ username, password });

      login({
        id: userData.id,
        username: userData.username,
        email: userData.email,
      });

      localStorage.setItem("accessToken", userData.accessToken);
      localStorage.setItem("refreshToken", userData.refreshToken);

      navigate("/resumen"); 
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "Hubo un error al intentar iniciar sesión.");
      } else {
        setError("Algo salió mal. Por favor, intenta nuevamente.");
      }
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Container>
    <Logo alt="Logo Plantas" src="../assets/plantas.png" />
      <form onSubmit={handleLogin}>
        <FormInput
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <BtnComprar type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Iniciar Sesión"}
        </BtnComprar>
        <StyledLink  href="/" onClick={handleRedirect}>Seguir compando</StyledLink>
      </form>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      <StyledLink
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleForgotPassword();
        }}
      >
        Olvidé mi contraseña
      </StyledLink>
      {isModalOpen && (
        <ModalOverlay onClose={closeModal}>
          <h2>Restablecer Contraseña</h2>
          <p>Ingresa tu correo electrónico para recibir un enlace de restablecimiento.</p>
          <FormInput
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
          <BtnComprar onClick={handleSend}>Enviar</BtnComprar>
          {error && <ErrorMessage>{error}</ErrorMessage>}
      {showAlert && <AlertMessage>Se envió la información al correo ingresado.</AlertMessage>}
        
          <StyledCancelButton onClick={closeModal}>Cancelar</StyledCancelButton>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default FormLogin;