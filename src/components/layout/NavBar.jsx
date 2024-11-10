import {
  Bars3Icon as MenuBarsIcon,
  ArrowLeftEndOnRectangleIcon as LoginIcon,
  ChevronLeftIcon as BackIcon,
} from "@heroicons/react/24/outline";
import { UserPlusIcon as SignUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchForm from "../form/SearchForm";
import { useDebounce } from "../../hooks/useDebounce";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const location = useLocation();
  const path = location.pathname;

  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedSearchQuery !== null) {
      navigate(
        debouncedSearchQuery
          ? `/search?query=${debouncedSearchQuery}`
          : "/search"
      );
    }
  }, [debouncedSearchQuery, navigate]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 w-20 h-full md:border-b-2 md:w-screen md:h-20">
        <div className="z-20 flex w-full h-screen border-b-2 md:h-20 ">
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
          <section className="w-full justify-between hidden md:flex *:text-xl *:font-bold *:whitespace-nowrap items-center px-10">
            <div className="flex gap-10">
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
                className={
                  path === "/sign-up" ? "text-orange-500" : "text-white"
                }
              >
                Sign Up
              </Link>
            </div>
          </section>
          <SearchForm
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />
        </div>
      </nav>
    </>
  );
}
