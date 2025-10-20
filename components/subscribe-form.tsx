"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Status = "idle" | "loading" | "success" | "error";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setStatus("loading");
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data: { ok?: boolean; error?: string } = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Something went wrong");

      setStatus("success");
      setEmail("");
      toast.success("You're on the list! 🎉", {
        description: "We'll email you first when trips open."});
    } catch (err: unknown) {
      setStatus("error");
      toast.error("Something went wrong 😬", {
        description: "Please try again later."});
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md mx-auto flex gap-2">
      <Input
        type="email"
        id="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-11"
        aria-label="Email address"
      />
      <Button type="submit" className="h-11" >
        {status === "loading" ? "Submitting..." : "Join"}
      </Button>
      <p className="sr-only" aria-live="polite"></p>
    </form>
  );
}