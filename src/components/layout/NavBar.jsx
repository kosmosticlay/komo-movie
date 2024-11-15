import {
  Bars3Icon as MenuBarsIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { logout, supabase } from "../../API/authAPI";
import Avatar from "../Avatar";
import useUser from "../../hooks/useUser";
import useDarkMode from "../../hooks/useDarkMode";
import SearchForm from "../form/SearchForm";
import useRemoveFocus from "../../hooks/useRemoveFocus";
import useScroll from "../../hooks/useScroll";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // 사이드바
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 프로필 드롭다운 메뉴
  const [searchQuery, setSearchQuery] = useState(""); // 검색어
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // 다크모드
  const isScrolled = useScroll(); // 스크롤에 따른 배경색 설정

  const avatarRef = useRef();
  const dropdownRef = useRef();

  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const user = useUser();

  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (searchQuery.trim() === "") {
      navigate("/search");
    } else {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = () => {
    setIsDropdownOpen(false);
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

  useRemoveFocus(avatarRef, handleDropdown, dropdownRef);

  return (
    <nav>
      <div
        className={`min-w-[380px] fixed top-0 z-10 flex items-center w-full px-5 h-16 transition-smooth ${
          isScrolled ? "bg-bgColor-dark" : "bg-transparent"
        }`}
      >
        {/* 모바일 : 메뉴 버튼만 표시*/}
        <MenuBarsIcon
          onClick={toggleMenu}
          className={`w-10 h-10 sm:hidden stroke-hover stroke-white transition-transform duration-300 ${
            isOpen ? "-translate-x-full" : "translate-x-0"
          }`}
        />
        {/* 데스크 탑 */}
        <div className="flex items-center justify-end w-full sm:justify-between">
          <div className="items-center hidden sm:flex">
            <h1>
              <Link to="/" className="text-xl nav-title">
                KOMO MOVIE
              </Link>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <SearchForm
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
              searchQuery={searchQuery}
            />
            <button
              className="relative w-8 h-8 ml-1 overflow-hidden"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <SunIcon
                  className={`customIcon-md hover:stroke-primary-dark ${
                    isDarkMode
                      ? "translate-y-0 opacity-100 animate-slide-down"
                      : "translate-y-0 opacity-100"
                  }`}
                />
              ) : (
                <MoonIcon
                  className={`customIcon-md hover:stroke-primary-dark ${
                    !isDarkMode
                      ? "translate-y-0 opacity-100 animate-slide-down"
                      : "-translate-y-full opacity-0"
                  } `}
                />
              )}
            </button>
            {user ? (
              <>
                <Avatar
                  avatarRef={avatarRef}
                  setIsDropdownOpen={setIsDropdownOpen}
                  isDropdownOpen={isDropdownOpen}
                  user={user}
                />
                {isDropdownOpen ? (
                  <div
                    ref={dropdownRef}
                    className="absolute flex flex-col items-center overflow-hidden text-sm font-semibold text-black rounded-md right-5 bg-neutral-200 w-28 top-16 "
                  >
                    <Link
                      to="/my-page"
                      className="w-full px-2 py-2 text-center hover:bg-secondary-dark"
                    >
                      마이 페이지
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full px-2 py-2 text-center hover:bg-secondary-dark"
                    >
                      로그아웃
                    </button>
                  </div>
                ) : null}
              </>
            ) : (
              <>
                {path !== "/login" && (
                  <Link
                    to="/login"
                    className={`
                  } border py-1 px-2 rounded-sm`}
                  >
                    로그인
                  </Link>
                )}
                {path !== "/sign-up" && (
                  <Link
                    to="/sign-up"
                    className={` border-orange-500 py-1 px-2 rounded-sm nav-title bg-orange-500`}
                  >
                    회원가입
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
