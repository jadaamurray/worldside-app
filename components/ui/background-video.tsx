"use client";
import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isMobile = window.innerWidth < 768;
    video.src = isMobile
      ? "/videos/krabi_portrait.webm"
      : "/videos/railay_landscape.webm";

    video.load();
    video.play();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />
  );
}