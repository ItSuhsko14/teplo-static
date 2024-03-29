// src/admin/components/Login.tsx
import React from "react";
import LoginForm from './LoginForm';

interface LoginProps {
  username: string;
  password: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: LoginHandler;
  onLoginSucces: () => void;
}

// Декларуйте тип функції handleSubmit
type LoginHandler = (event: React.FormEvent<HTMLFormElement>) => void;


const Login: React.FC<LoginProps> = ({ username, password, onUsernameChange, onPasswordChange, onSubmit, onLoginSucces }) => {
  const [error, setError] = React.useState("");

  

  return (
    <div>
      <LoginForm onLoginSucces={onLoginSucces}/>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
