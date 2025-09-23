"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Something went wrong");

      setStatus("success");
      setMessage("Thanks! Check your inbox for a confirmation.");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message ?? "Unable to subscribe right now.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md mx-auto flex gap-2">
      <Input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-11"
        aria-label="Email address"
      />
      <Button type="submit" className="h-11" disabled={status==="loading"}>
        {status === "loading" ? "Submitting..." : "Join"}
      </Button>
      <p className="sr-only" aria-live="polite">
        {message}
      </p>
    </form>
  );
}