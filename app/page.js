import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href={"/BarsExample"}>
          <span>Bars Example</span>
        </Link>
      </div>
      <div>
        <Link href={"/BeamsExample"}>
          <span>Beams Example</span>
        </Link>
      </div>
      <div>
        <Link href={"/SeventhChords"}>
          <span>Identify Seventh Chords</span>
        </Link>
      </div>
      <div>
        <Link href={"/TiesExample"}>
          <span>Ties Example</span>
        </Link>
      </div>
    </div>
  );
}
