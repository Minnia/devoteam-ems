import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import * as S from "./styled";
import { Typography } from "../../core/theme/typography";
import { themes } from "../../core/theme/theme";
import { Spacer } from "../../core/styled";
import tokens from "../../core/theme/tokens";
import Logo from "../../components/atoms/Logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    const isLoginSuccessful = login(email, password);

    if (!isLoginSuccessful) {
      message.error("Invalid email or password. Please try again.");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <S.LoginContainer>
      <S.LoginCard>
        <Logo height={200} />
        <Typography.Heading1 color={themes.light.accent}>
          Welcome to Devoteam!
        </Typography.Heading1>
        <S.InputField
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.InputField.Password
          placeholder="Password"
          value={password}
          onKeyDown={(e) => e.key === "Enter" && handleLoginClick()}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Spacer height={tokens.spacing.BASELINE * 2} />
        <S.LoginButton
          disabled={!email || !password}
          type="primary"
          onClick={handleLoginClick}
          tabIndex={0}
        >
          Login
        </S.LoginButton>
      </S.LoginCard>
    </S.LoginContainer>
  );
};

export default Login;
