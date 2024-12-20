import { useState } from "react";
import AuthInputField from "../../components/form/AuthInputField";
import SubmitBtn from "../../components/form/SubmitBtn";
import { login } from "../../API/authAPI";
import { useNavigate } from "react-router-dom";
import SocialLoginBtn from "../../components/form/SocialLoginBtn";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      console.log(userData);
      const { data, error } = await login(userData);

      if (error) {
        return;
      }

      console.log("로그인 성공:", data);
      navigate("/");
    } catch (error) {
      console.error("로그인 중 오류 발생:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black md:height-minus-nav">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-400 gap-4 flex flex-col items-center justify-center md:mt-0 w-[450px] mx-auto p-5"
      >
        <h1 className="my-5 text-3xl">로그인 컴포넌트</h1>
        <ul className="flex flex-col w-full gap-3">
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
        </ul>
        <SubmitBtn>Login</SubmitBtn>
        <SocialLoginBtn />
      </form>
    </div>
  );
}
