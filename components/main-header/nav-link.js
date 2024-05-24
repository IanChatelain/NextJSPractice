import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link href={href} className="text-gray-600 hover:text-black mx-2">
      {children}
    </Link>
  );
}
