"use client";

import { useEffect, useRef, useState } from "react";
import JayMessage from "@/components/business-component/jay-message";
import Jay from "@/components/business-component/jay";
import { User } from "lucide-react";

export default function Home() {
  const [welcomingMessage, setWelcomingMessage] = useState("");

  const fetchWelcomingMessage = async () => {
    const response = await fetch("/api/welcome");
    const result = await response.json();
    setWelcomingMessage(result.message);
  };

  useEffect(() => {
    fetchWelcomingMessage();
  }, []);

  const userClickReady = () => {
    console.log("User is ready to start the interaction");
  };

  return (
    <main className="p-8 w-screen h-screen flex flex-col bg-[#98C1D9] gap-8">
      <JayMessage
        messageToShow={welcomingMessage}
        onReadyClick={() => userClickReady()}
      />
      <Jay />
    </main>
  );
}
