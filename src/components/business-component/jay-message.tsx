import { Card, CardDescription, CardHeader } from "../ui/card";

export interface JayMessageProps {
  messageToShow: string;
  onReadyClick: () => void;
}

export default function JayMessage(props: JayMessageProps) {
  const handleReadyClick = () => {
    props.onReadyClick();
  };

  return (
    <div className="flex content-center justify-center ">
      <Card className="w-3/6">
        <CardHeader>
          <CardDescription>{props.messageToShow}</CardDescription>
          <div className="flex flex-row justify-end w-auto hover:cursor-pointer text-[#3077E3]">
            <span onClick={handleReadyClick}>I'm ready</span>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
