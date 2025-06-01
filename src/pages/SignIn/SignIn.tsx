import { LoginButton, LoginTextField } from "@components/index";
import {
  mainContainer,
  textFieldContainer,
  titleContainer,
} from "./SignIn.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePostRegister from "apis/hooks/user/usePostRegister";
import axios from "axios";

const SignIn: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { mutate: register } = usePostRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userId = Number(localStorage.getItem("userId"));
    console.log("✅ MyPage에서 불러온 userId:", userId);

    register(
      { username: name, email, password },
      {
        onSuccess: () => {
          alert("회원가입 완료");
          navigate("/login");
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
        <LoginButton mode={"login"} children={"회원가입 하기"} type="submit" />
      </form>
    </div>
  );
};

export default SignIn;
