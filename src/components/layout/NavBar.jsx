import {
  Bars3Icon as MenuBarsIcon,
  ArrowLeftEndOnRectangleIcon as LoginIcon,
  ChevronLeftIcon as BackIcon,
} from "@heroicons/react/24/outline";
import { UserPlusIcon as SignUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 z-10 w-20 h-full bg-black md:border-b-2 md:w-full md:h-20">
        <div className="flex w-full h-screen border-b-2 md:h-20 md:w-20">
          {/* 메뉴 아이콘 */}
          <MenuBarsIcon
            onClick={toggleMenu}
            className={`w-10 h-10 m-5 md:hidden stroke-hover stroke-white transition-transform duration-300 ${
              isOpen ? "-translate-x-full" : "translate-x-0"
            }`}
          />

          {/* 사이드 메뉴 */}
          <div
            className={`md:hidden fixed left-0 flex flex-col items-center justify-between w-20 h-screen py-5 bg-slate-300 transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <BackIcon
              onClick={toggleMenu}
              className="w-10 h-10 md:hidden stroke-hover"
            />
            <div className="flex flex-col gap-5">
              <Link to="/login">
                <LoginIcon
                  className={`w-10 h-10 stroke-hover md:hidden ${
                    path === "/login" ? "stroke-orange-500" : "stroke-black"
                  }`}
                />
              </Link>
              <Link to="/sign-up">
                <SignUpIcon
                  className={`w-10 h-10 stroke-hover md:hidden ${
                    path === "/sign-up" ? "stroke-orange-500" : "stroke-black"
                  }`}
                />
              </Link>
            </div>
          </div>

          {/* 데스크톱 메뉴 */}
          <section className="w-full hidden md:flex gap-10 *:text-xl *:font-bold *:whitespace-nowrap items-center px-10">
            <Link to="/" className="text-white">
              Logo
            </Link>
            <Link
              to="/login"
              className={path === "/login" ? "text-orange-500" : "text-white"}
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className={path === "/sign-up" ? "text-orange-500" : "text-white"}
            >
              Sign Up
            </Link>
          </section>
        </div>
      </nav>
    </>
  );
}
