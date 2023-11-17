"use client";
import { Vex } from "vexflow";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Page1() {
  const containerRef = useRef(null);

  useEffect(() => {
    const { Renderer, Stave, StaveNote, Accidental, Beam, Formatter, Dot } =
      Vex.Flow;

    const contRefCurrent = containerRef.current;

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
        dotted(
          new StaveNote({ keys: ["e##/5"], duration: "8d" }).addModifier(
            new Accidental("##")
          )
        ),
        new StaveNote({ keys: ["b/4"], duration: "16" }).addModifier(
          new Accidental("b")
        ),
        new StaveNote({ keys: ["c/4"], duration: "8" }),
        new StaveNote({ keys: ["d/4"], duration: "16" }),
        new StaveNote({ keys: ["e/4"], duration: "16" }).addModifier(
          new Accidental("b")
        ),
        new StaveNote({ keys: ["d/4"], duration: "16" }),
        new StaveNote({ keys: ["e/4"], duration: "16" }).addModifier(
          new Accidental("#")
        ),
        new StaveNote({ keys: ["g/4"], duration: "32" }),
        new StaveNote({ keys: ["a/4"], duration: "32" }),
        new StaveNote({ keys: ["g/4"], duration: "16" }),
        new StaveNote({ keys: ["d/4"], duration: "q" }),
      ];

      const beams = Beam.generateBeams(notes);
      Formatter.FormatAndDraw(rendererContext, stave, notes);
      beams.forEach((b) => {
        b.setContext(rendererContext).draw();
      });

      // A helper function to add a dot to a note.
      function dotted(note) {
        Dot.buildAndAttach([note]);
        return note;
      }

      return () => {
        contRefCurrent.innerHTML = "";
      };
    }
  }, []);

  return <div ref={containerRef} />;
}
