"use client";

import { useEffect, useRef, useState } from "react";
import JayMessage from "@/components/business-component/jay-message";
import Jay from "@/components/business-component/jay";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
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
    router.push("/mood");
  };

  return (
    <div>
      <JayMessage
        messageToShow={welcomingMessage}
        onReadyClick={() => userClickReady()}
      />
      <Jay />
    </div>
  );
}
