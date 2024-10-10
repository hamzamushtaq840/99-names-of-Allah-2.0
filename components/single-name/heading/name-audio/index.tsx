"use client";
// Core
import { useEffect, useRef, useState } from "react";

// Icons
import { FaPause } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";

// Interface
import { INameAudioComponentProp } from "@/lib/interfaces";

const NameAudio = ({ name }: INameAudioComponentProp) => {
  // State
  const [isPlaying, setIsPlaying] = useState(false);
  // Ref
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Effects
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

    audioRef.current = audio;

    const audioEndedHandler = () => {
      setIsPlaying(false);
    };
    audio.addEventListener("ended", audioEndedHandler);

    return () => {
      audio.removeEventListener("ended", audioEndedHandler);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [isPlaying, name]);

  // Handlers
  const playAudio = () => {
    setIsPlaying(true);
  };

  return (
    <button aria-label="play/pause" onClick={playAudio}>
      {isPlaying ? (
        <FaPause className="cursor-not-allowed text-3xl text-orange" />
      ) : (
        <HiSpeakerWave className="cursor-pointer text-3xl text-orange" />
      )}
    </button>
  );
};

export default NameAudio;
