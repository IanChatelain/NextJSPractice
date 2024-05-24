import Link from "next/link";
import Image from "next/image";

import LogoImg from "@/assets/logo.png";
import NavLink from "@/components/main-header/nav-link";

export default function MainHeader() {
  return (
    <header className="w-full bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="mr-5">
            <Image
              src={LogoImg}
              alt="Popper cybersecurity logo"
              width={75}
              height={75}
              priority
            />
          </Link>
          <h1 className="text-xl font-semibold">Login Page</h1>
        </div>
        <nav>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
