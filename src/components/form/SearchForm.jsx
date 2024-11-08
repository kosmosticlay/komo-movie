import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchForm() {
  return (
    <form className="fixed hidden gap-2 sm:flex top-5 right-5">
      <input
        className="pl-2 font-normal text-white bg-transparent border-b-2 border-white outline-none min-w-56 focus:border-orange-500"
        name="searchKey"
        type="text"
      />
      <button>
        <MagnifyingGlassIcon className="w-10 h-10 stroke-white stroke-hover" />
      </button>
    </form>
  );
}
