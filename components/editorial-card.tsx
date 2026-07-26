"use client";

import Image from "next/image";

type EditorialCardProps = {
  title: string;
  sub: string;
  media: string;
  mediaType?: "image" | "video";
  poster?: string;
  tag?: string;
  className?: string;
  rotate?: string;
};

export default function EditorialCard({
  title,
  sub,
  media,
  mediaType = "image",
  poster,
  tag,
  className = "",
  rotate = "",
}: EditorialCardProps) {
  return (
    <article
      className={`group relative h-72 md:h-96 rounded-3xl overflow-hidden border-2 border-ink dark:border-cream/30 shadow-[6px_6px_0_0_var(--ink)] dark:shadow-[6px_6px_0_0_var(--cream)] transition-transform duration-300 hover:-translate-y-1 ${rotate} ${className}`}
    >
      {mediaType === "video" ? (
        <video
          src={media}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <Image
          alt={title}
          src={media}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      {tag && (
        <span className="absolute top-4 left-4 font-anton uppercase text-xs tracking-widest bg-sunbeam text-ink px-3 py-1 rounded-full rotate-[-3deg]">
          {tag}
        </span>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-5 text-cream">
        <h3 className="font-abril text-3xl md:text-4xl leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,.5)]">
          {title}
        </h3>
        <p className="mt-1 font-anton uppercase text-xs md:text-sm tracking-wide text-cream/90">
          {sub}
        </p>
      </div>
    </article>
  );
}
