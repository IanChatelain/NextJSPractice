import Link from "next/link";

export default function PageLink({ href, children }) {
  return (
    <Link href={href} className="text-gray-600 hover:text-black">
      {children}
    </Link>
  );
}
