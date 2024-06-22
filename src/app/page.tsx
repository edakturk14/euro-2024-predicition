"use client"
import CountryList from "@/components/CountryList";
import HowToPlay from "@/components/HowToPlay";
import Leaderboard from "@/components/Leaderboard";

export default function Home() {
  return (
    <main>
      <CountryList />
      <HowToPlay />
      <Leaderboard />
    </main>
  );
}
