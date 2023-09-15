import { ReactNode } from "react";

export function MenuItem({
  id,
  hidde,
  children,
}: {
  id: string;
  hidde: () => void;
  children: ReactNode;
}) {
  const scrollTo = (id: string) => {
    let element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <li
      onClick={() => {
        // hidde();
        scrollTo(id);
      }}
      className="
    mx-[1em] cursor-pointer 
    after:content-[' '] after:block after:w-[0%] after:h-[2px] after:bg-red-500 after:duration-300 after:ease-in-out after:transition-width 
    hover:after:w-full
  "
    >
      {children}
    </li>
  );
}
