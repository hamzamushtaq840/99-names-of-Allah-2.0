import React from "react";
import NewAudio from "./NameAudio";
import ArabicName from "./ArabicName";

const Heading = ({
  name,
}: {
  name: {
    arabic: { name: string };
    english: { name: string };
  };
}) => {
  return (
    <div className="flex items-center gap-4">
      <ArabicName name={name?.arabic?.name} />
      <NewAudio name={name?.english?.name} />
    </div>
  );
};

export default Heading;
