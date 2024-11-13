import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Avatar({
  avatarRef,
  user,
  setIsDropdownOpen,
  isDropdownOpen,
}) {
  const avatar_url = user?.user_metadata?.avatar_url;

  //  console.log(avatar_url);
  return (
    <div
      ref={avatarRef}
      onClick={() => setIsDropdownOpen((prev) => !prev)}
      className="w-8 h-8 overflow-hidden rounded-full cursor-pointer "
    >
      {avatar_url ? (
        <img src={avatar_url} alt="프로필사진" />
      ) : (
        <UserCircleIcon
          className={`hover:stroke-primary-dark ${
            isDropdownOpen ? "stroke-primary-dark" : "stroke-white"
          }`}
        />
      )}
    </div>
  );
}
