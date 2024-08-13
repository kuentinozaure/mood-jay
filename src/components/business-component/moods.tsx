import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cardTitles, Mood } from "@/constants/mood";
import { useState } from "react";

export interface MoodProps {
  moodSelected: (mood: Mood) => void;
}

export default function Moods(props: MoodProps) {
  const [moods] = useState(cardTitles);

  const onMoodClick = (moodSelected: Mood) => {
    props.moodSelected(moodSelected);
  };

  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {moods.map((mood) => (
        <Card
          key={mood.key}
          className="w-1/6 hover:cursor-pointer"
          onClick={() => onMoodClick(mood)}
        >
          <CardHeader>
            <CardTitle>{mood.title}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
