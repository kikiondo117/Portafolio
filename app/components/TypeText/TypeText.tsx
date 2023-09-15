import TypewriterComponent from "typewriter-effect";

export function TypeText() {
  return (
    <h2 className="ease-in-out transition-all duration-500 text-2xl md:text-5xl capitalize self-start">
      <TypewriterComponent
        options={{ autoStart: true, loop: true, skipAddStyles: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString("<span class='text-red-500'>Hello World!</span>")
            .pauseFor(500)
            .deleteAll()
            .typeString("<span class='text-blue-500'>Increibles!</span>")
            .pauseFor(500)
            .deleteAll()
            .typeString("<span class='text-green-500'>Reutilizables!</span>")
            .pauseFor(500)
            .deleteAll()
            .start();
        }}
      />
    </h2>
  );
}
