import { LoginButton, LoginTextField } from "@components/index";
import { useState } from "react";
import {
  buttonContainer,
  divider,
  dividerText,
  dividerWrapper,
  mainContainer,
  textFieldContainer,
  titleContainer,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import usePostLogin from "apis/hooks/user/usePostLogin";
import axios from "axios";

const Login: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { mutate: login } = usePostLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    login(
      { username: id, password },
      {
        onSuccess: (res) => {
          alert("로그인 성공");
          localStorage.setItem("accessToken", res.access_token);
          navigate("/");
        },
        onError: (error: unknown) => {
          if (axios.isAxiosError(error)) {
            const msg =
              error.response?.data?.msg ?? "회원가입 중 오류가 발생했습니다.";
            alert(msg);
          } else {
            alert("알 수 없는 오류가 발생했습니다.");
          }
        },
      }
    );
  };

  return (
    <div css={mainContainer}>
      <div css={titleContainer}>로그인</div>
      <form onSubmit={handleSubmit} css={textFieldContainer}>
        <LoginTextField
          type="text"
          value={id}
          onChange={setId}
          placeholder="아이디"
        />
        <LoginTextField
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="비밀번호"
        />
        <div css={buttonContainer}>
          <LoginButton mode={"login"} children={"로그인하기"} />
          <div css={dividerWrapper}>
            <div css={divider} />
            <span css={dividerText}>회원이 아니신가요?</span>
            <div css={divider} />
          </div>
          <LoginButton mode={"signin"} children={"회원가입"} />
        </div>
      </form>
    </div>
  );
};

export default Login;
