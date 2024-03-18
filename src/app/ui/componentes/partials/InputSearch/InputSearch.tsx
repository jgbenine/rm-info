import { useState } from "react";
import { Search } from "lucide-react";

function InputSearch({ onSearchSubmit }: { onSearchSubmit: (term: string) => void }) {
  const [searchTerm, setSearchTerm] = useState("");

  const submitSearch = () => {
    const formattedSearchTerm = searchTerm.trim().toLowerCase();
    const encodedSearchTerm = formattedSearchTerm.replace(/\s+/g, '+');
    onSearchSubmit(encodedSearchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  };

  const handleClickSearch = () => {
    submitSearch();
  };

  return (
    <span className="relative max-w-[250px] w-full text-sm">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search name"
        className="p-2.5 w-full bg-white rounded-full border-2 border-sky-100 focus:outline-rmGreen relative h-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleClickSearch} className="absolute right-5 top-2.5 rounded-full bg-purple-100 w-9 flex justify-center h-50 hover:bg-slate-200">
        <Search
          className=" text-rmGreen opacity-80 cursor-pointer"
          width={18}
        />
      </button>
    </span>
  );
}

export default InputSearch;
