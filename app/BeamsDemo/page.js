"use client";
import { Vex } from "vexflow";
import { useEffect, useRef } from "react";
import Link from "next/link";
import BeamsExample from "../components/BeamsExample";

export default function BeamsDemo() {
  return (
    <div>
      <h1>Beams Demo</h1>
      <BeamsExample />
      <Link href={"/"}>
        <span>Back Home</span>
      </Link>
    </div>
  );
}
