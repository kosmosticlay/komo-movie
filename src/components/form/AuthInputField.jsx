import AuthInput from "./AuthInput";

export default function AuthInputField({ name, type, value, onChange }) {
  return (
    <div className="w-full mb-5">
      <label htmlFor={name} className="text-xl font-bold text-white">
        {`${name}`}
      </label>
      <AuthInput
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
