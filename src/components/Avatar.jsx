export default function Avatar({ user }) {
  return (
    <div
      className={`fixed hidden w-10 h-10 rounded-full cursor-pointer sm:flex top-6 right-10 ${
        user ? "bg-green-700" : "bg-gray-700"
      }`}
    >
      {user?.avatar_url && <img src="" alt="프로필사진" />}
    </div>
  );
}
