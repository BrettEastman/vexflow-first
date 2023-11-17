"use client";
import { Vex } from "vexflow";
import { useEffect, useRef } from "react";
import Link from "next/link";
import BarsExample from "../components/BarsExample";

export default function BarsDemo() {
  return (
    <div>
      <h1>Bars Demo</h1>
      <BarsExample />
      <Link href={"/"}>
        <span>Back Home</span>
      </Link>
    </div>
  );
}
