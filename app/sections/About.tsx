import { Sections } from "~/models/sections";

export function About() {
  return (
    <section
      id={Sections.ABOUT}
      className="min-h-screen h-fit mt-16 relative md:mt-0"
    >
      Acerca de
    </section>
  );
}
