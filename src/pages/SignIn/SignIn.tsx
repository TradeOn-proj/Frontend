import { LoginButton, LoginTextField } from "@components/index";
import {
  mainContainer,
  textFieldContainer,
  titleContainer,
} from "./SignIn.style";
import { useState } from "react";

const SignIn: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 로그인 API
  };
  return (
    <div css={mainContainer}>
      <div css={titleContainer}>회원가입</div>
      <form onSubmit={handleSubmit} css={textFieldContainer}>
        <LoginTextField
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="이메일"
        />
        <LoginTextField
          type="text"
          value={name}
          onChange={setName}
          placeholder="닉네임"
        />
        <LoginTextField
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="비밀번호"
        />
      </form>
      <LoginButton mode={"login"} children={"다음"} />
    </div>
  );
};

export default SignIn;
