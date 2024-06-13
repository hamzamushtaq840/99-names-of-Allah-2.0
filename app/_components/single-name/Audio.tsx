"use client";
import { useEffect, useRef, useState } from "react";
import { FaPause } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";

const NewAudio = ({ englishName }: { englishName: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null); // Add a ref to keep track of the audio element

  useEffect(() => {
    const audio = new Audio();

    if (isPlaying) {
      const audioFileName = `${englishName}.mp3`;
      const audioPath = `/namesAudios/${audioFileName}`;
      audio.src = audioPath;
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    audioRef.current = audio; // Store the audio element in the ref

    const audioEndedHandler = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("ended", audioEndedHandler);

    return () => {
      console.log("component is unmounted");
      audio.removeEventListener("ended", audioEndedHandler);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [isPlaying, englishName]);

  const playAudio = () => {
    setIsPlaying(true);
  };
  return (
    <>
      {isPlaying ? (
        <FaPause
          onClick={playAudio}
          className="cursor-not-allowed text-3xl text-orange"
        />
      ) : (
        <HiSpeakerWave
          onClick={playAudio}
          className="cursor-pointer text-3xl text-orange"
        />
      )}
    </>
  );
};

export default NewAudio;
