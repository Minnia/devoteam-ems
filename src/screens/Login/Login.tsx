import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import * as S from "./styled";
import { Typography } from "../../components/core/theme/typography";
import { themes } from "../../components/core/theme/theme";
import { Spacer } from "../../components/core/styled";
import tokens from "../../components/core/theme/tokens";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = async (e: any) => {
    if (e.key === "Enter" || e.type === "click") {
      const isLoginSuccessful = login(email, password);

      if (!isLoginSuccessful) {
        message.error("Invalid email or password. Please try again.");
      }
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <Spacer height={tokens.spacing.BASELINE * 2} />
        <S.LoginButton
          disabled={!email || !password}
          type="primary"
          onClick={handleLoginClick}
          onKeyDown={handleLoginClick}
        >
          Login
        </S.LoginButton>
      </S.LoginCard>
    </S.LoginContainer>
  );
};

export default Login;
