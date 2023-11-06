"use client";
import { Vex } from "vexflow";
import { useEffect, useRef } from "react";

export default function Page2() {
  const containerRef = useRef(null);

  useEffect(() => {
    const { Renderer, Stave, StaveNote, Accidental, Beam, Formatter, Dot } =
      Vex.Flow;

    if (containerRef.current) {
      const renderer = new Renderer(
        containerRef.current,
        Renderer.Backends.SVG
      );

      renderer.resize(500, 500);
      const rendererContext = renderer.getContext();
      rendererContext.setFont("Arial", 10);

      const stave = new Stave(10, 40, 400);

      stave.addClef("treble").addTimeSignature("4/4");

      stave.setContext(rendererContext).draw();

      ////////////////////////

      // Create the notes
      const notes = [
        new StaveNote({
          keys: ["e#/4", "g#/4", "b/4", "d/5"],
          duration: "w",
        })
          .addModifier(new Accidental("#"), 0)
          .addModifier(new Accidental("#"), 1),
      ];

      // Helper function to justify and draw a 4/4 voice.
      Formatter.FormatAndDraw(rendererContext, stave, notes);
    }
  }, []);

  return <div ref={containerRef}></div>;
}
