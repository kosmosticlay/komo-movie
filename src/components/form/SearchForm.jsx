import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { useRemoveFocus } from "../../hooks/useRemoveFocus";

export default function SearchForm({
  searchQuery,
  handleSearch,
  setSearchQuery,
}) {
  const [isWide, setIsWide] = useState(false);
  const inputRef = useRef();
  const clearIconRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleBlur = () => {
    setIsWide(false);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    inputRef.current.value = "";
    setSearchQuery("");
  };

  useEffect(() => {
    if (isWide && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isWide]);

  useRemoveFocus(inputRef, handleBlur, clearIconRef);

  return (
    <div
      onClick={() => setIsWide(true)}
      className={`overflow-hidden transition-smooth flex gap-2 items-center border rounded-sm h-8 ${
        isWide ? "px-2 w-[210px] border-white" : "pl-1 w-8 border-gray-dark"
      }`}
    >
      <button className="z-10">
        <MagnifyingGlassIcon
          strokeWidth={2}
          className={`transition-smooth customIcon-sm ${
            isWide ? "text-white" : "text-gray-dark"
          }`}
        />
      </button>
      <form className="" onSubmit={handleSubmit}>
        <input
          placeholder="검색어를 입력하세요."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          ref={inputRef}
          className={`text-sm placeholder:text-sm outline-none bg-transparent ${
            isWide ? "w-[135px]" : "w-0"
          }`}
          type="text"
        />
      </form>
      {isWide ? (
        <XCircleIcon
          ref={clearIconRef}
          onClick={handleClear}
          className={`customIcon-sm  ${searchQuery ? "flex" : "hidden"}`}
        />
      ) : null}
    </div>
  );
}
