export default function AuthInput({ id, name, type, value, onChange }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      className="w-full h-10 border-2 rounded-md"
      autoComplete="new-password"
      value={value}
      onChange={onChange}
    />
  );
}
