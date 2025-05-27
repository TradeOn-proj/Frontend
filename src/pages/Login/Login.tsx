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

const Login: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("입력된 아이디:", id);
    console.log("입력된 비밀번호:", password);
    // 로그인 API
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
      </form>
      <div css={buttonContainer}>
        <LoginButton mode={"login"} children={"로그인하기"} />
        <div css={dividerWrapper}>
          <div css={divider} />
          <span css={dividerText}>회원이 아니신가요?</span>
          <div css={divider} />
        </div>
        <LoginButton mode={"signin"} children={"회원가입"} />
      </div>
    </div>
  );
};

export default Login;
