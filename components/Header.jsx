import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/">
            <span className="block text-lg font-semibold tracking-tight text-white">Inspire <span className="text-accent">Digital Studio</span></span>
            <span className="block text-xs text-white/60 mt-1">Websites &amp; mobile apps by Ahmad Mehmood</span>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
