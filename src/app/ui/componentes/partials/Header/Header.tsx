import Link from "next/link";
import Image from "next/image";
import InputSearch from "../InputSearch/InputSearch";

export function Header({onSearchSubmit}: any) {
  return (
    <header className="w-full max-w-full z-10 top-0 bg-sky-100 py-2 shadow-md flex fixed opacity-95">
      <div className="containerMain justify-between m-auto flex-col md:flex-row">
        <Link href="/">
          <Image src="/assets/rm-logo.png" width={150} height={100} alt="Logo" />
        </Link>
        <InputSearch onSearchSubmit={onSearchSubmit} />
      </div>
    </header>
  );
}
