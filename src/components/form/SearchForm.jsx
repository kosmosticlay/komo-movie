import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchForm({
  searchQuery,
  handleSearch,
  setSearchQuery,
}) {
  return (
    <form
      onSubmit={handleSearch}
      className="fixed hidden gap-2 mt-3 sm:flex top-5 right-10"
    >
      <input
        className="pl-2 font-normal text-white bg-transparent border-b-2 border-white outline-none min-w-56 focus:border-orange-500"
        name="searchKey"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button>
        <MagnifyingGlassIcon className="w-7 h-7 stroke-white stroke-hover" />
      </button>
    </form>
  );
}
