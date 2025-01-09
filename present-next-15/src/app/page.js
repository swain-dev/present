"use client";

import Complier from "@/components/complier";
import Counter from "@/components/Counter";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Counter count={count} setCount={setCount} />
      <Complier />
    </>
  );
}
