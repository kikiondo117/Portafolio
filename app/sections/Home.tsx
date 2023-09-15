import { TypeText } from "~/components/TypeText/TypeText";
import { Sections } from "~/models/sections";

export function Home() {
  return (
    <section
      id={Sections.HOME}
      className="min-h-screen h-fit mt-16 relative md:mt-0"
    >
      <div className="w-[85%] md:w-3/4 mx-auto flex justify-center items-center">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <TypeText />
        </div>
      </div>
    </section>
  );
}
