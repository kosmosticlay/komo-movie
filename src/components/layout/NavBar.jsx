import {
  Bars3Icon as MenuBarsIcon,
  ArrowLeftEndOnRectangleIcon as LoginIcon,
} from "@heroicons/react/24/outline";
import { UserPlusIcon as SignUpIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed top-0 z-10 flex flex-col items-center w-20 h-screen py-10 text-xl font-bold text-white nav-wide bg-slate-600">
      <MenuBarsIcon className="w-10 h-10 text-black stroke-hover md:hidden" />
      <div className="flex flex-col items-center justify-between h-full md:flex-row ">
        <Link to="/">
          <h1 className="hidden md:block">logo</h1>
        </Link>
        <ul>{/* 홈, 즐겨찾기등 */}</ul>
        <section className="*:ml-5 md:flex ">
          <Link to="/login">
            <p className="hidden md:block">Login</p>
            <LoginIcon className="w-10 h-10 stroke-hover md:hidden" />
          </Link>
          <Link to="/sign-up">
            <p className="hidden md:block">Sign Up</p>
            <SignUpIcon className="w-10 h-10 stroke-hover md:hidden" />
          </Link>
        </section>
      </div>
    </nav>
  );
}
