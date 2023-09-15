import { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Navbar } from "~/components/Navbar/Navbar";

export default function LayoutWithNavbar() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="z-10">
        <Outlet />
      </div>
    </div>
  );
}
