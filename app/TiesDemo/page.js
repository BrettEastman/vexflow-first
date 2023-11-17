"use client";
import { Vex } from "vexflow";
import { useEffect, useRef } from "react";
import Link from "next/link";
import TiesExample from "../components/TiesExample";

export default function TiesDemo() {
  return (
    <div>
      <h1>Ties Demo</h1>
      <TiesExample />
      <Link href={"/"}>
        <span>Back Home</span>
      </Link>
    </div>
  );
}
