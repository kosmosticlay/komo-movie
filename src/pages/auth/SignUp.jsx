import AuthInputField from "../../components/form/AuthInputField";
import SubmitBtn from "../../components/form/SubmitBtn";

export default function SignUp() {
  return (
    <div className="absolute flex items-center justify-center w-full h-screen bg-black md:screen-minus-nav">
      <form className="bg-slate-400 flex flex-col items-center justify-center md:mt-0 w-[450px] mx-auto p-5">
        <h1 className="my-10 text-3xl">회원가입 컴포넌트</h1>
        <ul className="w-full">
          <AuthInputField fieldName="name" type="text" />
          <AuthInputField fieldName="email" type="email" />
          <AuthInputField fieldName="password" type="password" />
          <AuthInputField fieldName="confirm-password" type="password" />
        </ul>
        <SubmitBtn>Sign Up</SubmitBtn>
      </form>
    </div>
  );
}
