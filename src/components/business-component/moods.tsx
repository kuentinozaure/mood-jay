import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cardTitles } from "@/constants/mood";
import { useState } from "react";

export default function Moods() {
  const [moods] = useState(cardTitles);

  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {moods.map(
        (mood) =>
          mood && (
            <Card key={mood.key} className="w-1/6">
              <CardHeader>
                <CardTitle>{mood.title}</CardTitle>
              </CardHeader>
            </Card>
          )
      )}
    </div>
  );
}
