import { Link } from "@remix-run/react";

export function Logo() {
  return (
    <Link
      to="/"
      className="h-fit cursor-pointer hover:scale-110 hover:transition-[0.5s]"
    >
      <span className="text-xl max-w-3xl md:text-4xl ">🌵 kikis</span>
    </Link>
  );
}
