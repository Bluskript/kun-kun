import { Component, onMount } from "solid-js";
import { Game } from "./game";

const App: Component = () => {
  let canvasElement: HTMLCanvasElement;

  onMount(() => new Game(canvasElement));

  return (
    <div id="viewport">
      <canvas touch-action="none" ref={canvasElement!}></canvas>
    </div>
  );
};

export default App;
