import { Search } from "lucide-react";
// import { useContextData } from "../../../data/hooks/useContextData";
import { ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  // const { setSearchInputQuery } = useContextData();

  // function getSearchParams(event: ChangeEvent<HTMLInputElement>) {
  //   const { value } = event.currentTarget;
  //   setSearchInputQuery(value);
  // }

  return (
    <header className="w-full max-w-full z-10 top-0 bg-sky-100 py-2 border shadow-md flex fixed opacity-95">
      <div className="containerMain justify-between m-auto flex-col xl:flex-row">
        <Link href="/">
          <Image src="/assets/rm-logo.png" width={150} height={100} alt="Logo" />
        </Link>
        <span className="relative max-w-[400px] w-full">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search name"
            className="p-2.5 w-full bg-white rounded-full border-2 border-sky-100 focus:outline-rmGreen relative h-full"
            // onChange={getSearchParams}
          />
          <Search
            className="absolute right-5 top-2.5 text-rmGreen opacity-80"
            width={20}
          />
        </span>
      </div>
    </header>
  );
}
