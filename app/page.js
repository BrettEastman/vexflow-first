"use client";
import { Vex } from "vexflow";
import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const { Accidental, Renderer, Stave, StaveNote, Formatter, Voice } =
      Vex.Flow;

    if (containerRef.current) {
      const renderer = new Renderer(
        containerRef.current,
        Renderer.Backends.SVG
      );

      // Configure the rendering context.
      renderer.resize(500, 500);
      const rendererContext = renderer.getContext();
      rendererContext.setFont("Arial", 10);

      // Create a stave of width 400 at position 10, 40.
      const stave = new Stave(10, 40, 400);

      // Add a clef and time signature.
      stave.addClef("treble").addTimeSignature("4/4");

      // Connect it to the rendering context and draw!
      stave.setContext(rendererContext).draw();

      ////////////////////////

      // Create the notes
      const notes = [
        new StaveNote({
          keys: ["g/4", "b/4", "cb/5", "e/5", "g#/5", "b/5"],
          duration: "h",
        })
          .addModifier(new Accidental("bb"), 0)
          .addModifier(new Accidental("b"), 1)
          .addModifier(new Accidental("#"), 2)
          .addModifier(new Accidental("n"), 3)
          .addModifier(new Accidental("b"), 4)
          .addModifier(new Accidental("##"), 5),
        new StaveNote({ keys: ["c/4"], duration: "h" }),
      ];

      // Helper function to justify and draw a 4/4 voice.
      Formatter.FormatAndDraw(rendererContext, stave, notes);
    }
  }, []);

  return <div ref={containerRef} />;
}
