"use client";
import { Vex } from "vexflow";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function TiesExample() {
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

    const contRefCurrent = containerRef.current;

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
        dotted(
          new StaveNote({
            keys: ["e##/5"],
            duration: "8d",
          }).addModifier(new Accidental("##"))
        ),
        new StaveNote({
          keys: ["b/4"],
          duration: "16",
        }).addModifier(new Accidental("b")),
        new StaveNote({
          keys: ["c/4"],
          duration: "8",
        }),
        new StaveNote({
          keys: ["d/4"],
          duration: "16",
        }),
        new StaveNote({
          keys: ["d/4"],
          duration: "16",
        }),
        new StaveNote({
          keys: ["d/4"],
          duration: "q",
        }),
        new StaveNote({
          keys: ["d/4"],
          duration: "q",
        }),
      ];

      const beams = Beam.generateBeams(notes);
      Formatter.FormatAndDraw(rendererContext, stave, notes);
      beams.forEach(function (b) {
        b.setContext(rendererContext).draw();
      });

      const ties = [
        new StaveTie({
          first_note: notes[4],
          last_note: notes[5],
          first_indices: [0],
          last_indices: [0],
        }),
        new StaveTie({
          first_note: notes[5],
          last_note: notes[6],
          first_indices: [0],
          last_indices: [0],
        }),
      ];

      ties.forEach((t) => {
        t.setContext(rendererContext).draw();
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
