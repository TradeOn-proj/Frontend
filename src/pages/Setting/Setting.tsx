import { useEffect, useState } from "react";
import {
  mainContainer,
  textFieldContainer,
  titleContainer,
} from "./Setting.style";
import { LoginButton, LoginTextField } from "@components/index";
import usePatchUserProfile from "apis/hooks/user/userPatchUserProfile";
import useUserProfile from "apis/hooks/user/userUserProfile";

const Setting: React.FC = () => {
  const userId = Number(localStorage.getItem("userId"));
  const { data: userProfile, isLoading } = useUserProfile(userId);
  const { mutate } = usePatchUserProfile(userId);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (userProfile) {
      setName(userProfile.username);
      setEmail(userProfile.email);
    }
  }, [userProfile]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      username: name,
      email,
    });
  };

  return (
    <div css={mainContainer}>
      <div css={titleContainer}>프로필 수정</div>
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
        <LoginButton mode="login" type="submit">
          수정하기
        </LoginButton>
      </form>
    </div>
  );
};

export default Setting;
