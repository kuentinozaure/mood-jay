"use client";

import Image from "next/image";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function Home() {
  const [welcomingMessage, setWelcomingMessage] = useState("");

  async function fetchWelcomingMessage() {
    const response = await fetch("/api/welcome");
    const result = await response.json();
    setWelcomingMessage(result.message);
  }

  useEffect(() => {
    fetchWelcomingMessage();
  }, []);

  return (
    <main className="p-8 w-screen h-screen flex flex-col bg-[#98C1D9]">
      <div>
        <Card>
          <CardHeader>
            <CardDescription>{welcomingMessage}</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="content-center">
        <Image
          src={`/jay_background-free.png`}
          alt={`My name is Jay`}
          width="500"
          height="500"
        />
      </div>
    </main>
  );
}
