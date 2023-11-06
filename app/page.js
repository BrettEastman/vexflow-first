"use client";
import { Vex } from "vexflow";
import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const {
      Renderer,
      Stave,
      StaveNote,
      StaveTie,
      Accidental,
      Beam,
      Formatter,
      Dot,
    } = Vex.Flow;

    if (containerRef.current) {
      const renderer = new Renderer(
        containerRef.current,
        Renderer.Backends.SVG
      );

      // Configure the rendering context.
      renderer.resize(720, 130);
      const rendererContext = renderer.getContext();
      rendererContext.setFont("Arial", 10);

      // Measure 1
      const staveMeasure1 = new Stave(10, 0, 300);
      staveMeasure1.addClef("treble").setContext(rendererContext).draw();

      const notesMeasure1 = [
        new StaveNote({ keys: ["c/4"], duration: "q" }),
        new StaveNote({ keys: ["d/4"], duration: "q" }),
        new StaveNote({ keys: ["b/4"], duration: "qr" }),
        new StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" }),
      ];

      // Helper function to justify and draw a 4/4 voice
      Formatter.FormatAndDraw(rendererContext, staveMeasure1, notesMeasure1);

      // Measure 2 - second measure is placed adjacent to first measure.
      const staveMeasure2 = new Stave(
        staveMeasure1.width + staveMeasure1.x,
        0,
        400
      );

      const notesMeasure2_part1 = [
        new StaveNote({ keys: ["c/4"], duration: "8" }),
        new StaveNote({ keys: ["d/4"], duration: "8" }),
        new StaveNote({ keys: ["b/4"], duration: "8" }),
        new StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "8" }),
      ];

      const notesMeasure2_part2 = [
        new StaveNote({ keys: ["c/4"], duration: "8" }),
        new StaveNote({ keys: ["d/4"], duration: "8" }),
        new StaveNote({ keys: ["b/4"], duration: "8" }),
        new StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "8" }),
      ];

      // Create the beams for 8th notes in second measure.
      const beam1 = new Beam(notesMeasure2_part1);
      const beam2 = new Beam(notesMeasure2_part2);

      const notesMeasure2 = notesMeasure2_part1.concat(notesMeasure2_part2);

      staveMeasure2.setContext(rendererContext).draw();
      Formatter.FormatAndDraw(rendererContext, staveMeasure2, notesMeasure2);

      // Render beams
      beam1.setContext(rendererContext).draw();
      beam2.setContext(rendererContext).draw();
    }
  }, []);

  return <div ref={containerRef} />;
}
