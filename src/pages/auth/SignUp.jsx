import { useState } from "react";
import AuthInputField from "../../components/form/AuthInputField";
import SubmitBtn from "../../components/form/SubmitBtn";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../API/authAPI";
import SocialLoginBtn from "../../components/form/SocialLoginBtn";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
      options: {
        data: {
          name, // user_metadata로 전달
          liked: [], // 좋아요 목록 (영화 ID)
        },
      },
    };

    try {
      console.log(userData);
      await signUp(userData);
      navigate("/");
    } catch (error) {
      console.error("회원가입 실패:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[700px] w-full h-screen bg-black md:height-minus-nav">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-400 flex flex-col gap-4 items-center justify-center w-[450px] mx-auto p-5"
      >
        <h1 className="my-5 text-3xl">회원가입 컴포넌트</h1>
        <ul className="flex flex-col w-full gap-3">
          <AuthInputField
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <AuthInputField
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthInputField
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <AuthInputField name="confirm-password" type="password" />
        </ul>
        <SubmitBtn>Sign Up</SubmitBtn>
        <SocialLoginBtn />
      </form>
    </div>
  );
}
