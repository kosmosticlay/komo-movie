import AuthInput from "./AuthInput";

export default function AuthInputField({ fieldName, type }) {
  return (
    <div className="w-full mb-5">
      <label
        htmlFor={fieldName}
        className="text-xl font-bold text-white "
      >{`${fieldName}`}</label>
      <AuthInput id={fieldName} name={fieldName} type={type} />
    </div>
  );
}
