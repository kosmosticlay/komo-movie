import {
  Bars3Icon as MenuBarsIcon,
  ArrowLeftEndOnRectangleIcon as LoginIcon,
  ArrowRightStartOnRectangleIcon as LogoutIcon,
  ChevronLeftIcon as BackIcon,
  UserPlusIcon as SignUpIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchForm from "../form/SearchForm";
import { useDebounce } from "../../hooks/useDebounce";
import { logout, supabase } from "../../API/authAPI";
import Avatar from "../Avatar";
import { useUser } from "../../hooks/useUser";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const user = useUser();
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === "") {
      navigate("/search");
    } else {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    const error = await logout();
    if (error) {
      console.error("로그아웃 중 오류 발생:", error.message);
    } else {
      setIsDropdownOpen(false); // 메뉴 닫기
      navigate("/login");
    }
  };

  useEffect(() => {
    if (location.pathname === "/search") {
      if (debouncedSearchQuery) {
        navigate(`/search?query=${debouncedSearchQuery}`);
      } else {
        navigate("/search");
      }
    }
  }, [debouncedSearchQuery, navigate, location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/search") {
      setSearchQuery("");
    }
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-0 z-20 w-20 h-full md:border-b-2 md:w-screen md:h-16">
        <div className="z-20 flex w-full h-screen md:h-16 ">
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
              {user ? (
                <LogoutIcon
                  onClick={handleLogout}
                  className={`w-10 h-10 stroke-hover md:hidden ${
                    path === "/" ? "stroke-orange-500" : "stroke-black"
                  }`}
                />
              ) : (
                <>
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
                        path === "/sign-up"
                          ? "stroke-orange-500"
                          : "stroke-black"
                      }`}
                    />
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* 데스크톱 메뉴 */}
          <section className="w-full justify-between hidden md:flex *:text-xl *:font-bold *:whitespace-nowrap items-center px-10">
            <div className="flex gap-10">
              <Link to="/" className="text-white">
                Logo
              </Link>
              {!user && (
                <>
                  <Link
                    to="/login"
                    className={
                      path === "/login" ? "text-orange-500" : "text-white"
                    }
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
                </>
              )}
            </div>
          </section>
          <div>
            <SearchForm
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
              searchQuery={searchQuery}
            />
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              onClick={() => setIsDropdownOpen(true)}
            >
              <Avatar user={user} />
              {isDropdownOpen && (
                <div className="relative w-32 h-32">
                  <div className="absolute w-32 mt-4 overflow-hidden bg-white rounded-lg shadow-lg sm:right-0 top-16">
                    {user ? (
                      <>
                        <Link
                          to="/my-page"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          마이 페이지
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                        >
                          로그아웃
                        </button>
                      </>
                    ) : (
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        로그인
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
