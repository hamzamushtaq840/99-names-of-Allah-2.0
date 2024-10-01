"use client";
import { useEffect, useRef, useState } from "react";
import { FaPause } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";

const NameAudio = ({ name }: { name: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null); // Add a ref to keep track of the audio element

  useEffect(() => {
    const audio = new Audio();

    if (isPlaying) {
      const audioFileName = `${name}.mp3`;
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
  }, [isPlaying, name]);

  const playAudio = () => {
    setIsPlaying(true);
  };
  return (
    <button onClick={playAudio}>
      {isPlaying ? (
        <FaPause className="cursor-not-allowed text-3xl text-orange" />
      ) : (
        <HiSpeakerWave className="cursor-pointer text-3xl text-orange" />
      )}
    </button>
  );
};

export default NameAudio;
