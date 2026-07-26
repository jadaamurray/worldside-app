"use client";
import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [poster, setPoster] = useState("/videos/railay_poster.jpg");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isMobile = window.innerWidth < 768;
    video.src = isMobile ? "/videos/krabi_portrait.mp4" : "/videos/railay_landscape.mp4";
    setPoster(isMobile ? "/videos/krabi_portrait_poster.jpg" : "/videos/railay_poster.jpg");

    video.load();
    video.play().catch(() => {
      // Autoplay can be blocked in some browsers/contexts; fail silently,
      // the poster image still reads fine without motion.
    });
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
  );
}
