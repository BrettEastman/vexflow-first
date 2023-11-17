"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Score from "./components/Score";
import SeventhChords from "./components/SeventhChords";

export default function Home() {
  return (
    <div>
      <h3>Identify Seventh Chords - from Lafayette Jazz Camp theory exam</h3>
      <SeventhChords />
      <h3>Score example from markacola react-vexflow repo</h3>
      <Score
        staves={[
          ["g3", "d4", "e4", "d4"],
          ["a4", "d4", "e4", "d4"],
          ["a4", "a4", "b4", "a4"],
          ["d4", "e4", ["g3", 2]],
        ]}
      />
      <h3>Examples from Vexflow Tutorial</h3>
      <div>
        <Link href={"/BarsDemo"}>
          <span>Bars Example</span>
        </Link>
      </div>
      <div>
        <Link href={"/BeamsDemo"}>
          <span>Beams Example</span>
        </Link>
      </div>
      <div>
        <Link href={"/TiesDemo"}>
          <span>Ties Example</span>
        </Link>
      </div>
    </div>
  );
}
