"use client";

import { useState } from "react";
import FloatingDecos from "@/components/FloatingDecos";
import HeroSection from "@/components/HeroSection";
import CoinCharacter from "@/components/CoinCharacter";
import QuoteCard from "@/components/QuoteCard";
import InfoSection from "@/components/InfoSection";
import FlipScreen from "@/components/FlipScreen";

export default function Home() {
  const [screen, setScreen] = useState<"landing" | "flip">("landing");

  return (
    <>
      <FloatingDecos />

      {/* 랜딩 페이지 */}
      <div
        className={`z-1 min-h-dvh flex flex-col justify-center pt-[60px] pb-[40px] transition-all duration-500 ${
          screen === "flip"
            ? "opacity-0 -translate-y-[30px] pointer-events-none absolute inset-0"
            : "relative"
        }`}
      >
        <div className="max-w-[480px] mx-auto px-[24px] relative sm:px-[40px]">
          <HeroSection onFlip={() => setScreen("flip")} />

          {/* 캐릭터 동전 미리보기 */}
          <div className="flex flex-col items-center mb-[32px] opacity-0 animate-fade-in-up [animation-delay:0.25s]">
            <div
              onClick={() => setScreen("flip")}
              className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-gold-shine via-gold to-gold-dark relative cursor-pointer animate-float transition-transform duration-200 hover:scale-105 active:scale-[0.97] sm:w-[220px] sm:h-[220px]"
              style={{
                boxShadow:
                  "0 8px 32px rgba(245,158,11,0.3), 0 2px 8px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.4)",
              }}
            >
              <div className="absolute inset-[8px] rounded-full border-[2.5px] border-[rgba(255,255,255,0.45)]" />
              <div className="absolute inset-[16px] rounded-full bg-gradient-to-[150deg] from-[#FFE880] to-[#F5B731] flex flex-col items-center justify-center gap-[2px]">
                <CoinCharacter variant="happy" />
                <span className="text-[11px] font-semibold text-[#8B6914] tracking-[1px] mt-[2px]">
                  FLIP ME
                </span>
              </div>
            </div>
            <p className="mt-[16px] text-[14px] text-text-light underline decoration-wavy decoration-gold-light underline-offset-4">
              동전을 눌러 결정하세요
            </p>
          </div>

          <QuoteCard />

          <InfoSection onFlip={() => setScreen("flip")} />
        </div>
      </div>

      {/* 동전 뒤집기 화면 */}
      <div
        className={`transition-all duration-500 ${
          screen === "landing"
            ? "opacity-0 translate-y-[30px] pointer-events-none absolute inset-0"
            : ""
        }`}
      >
        <FlipScreen onBack={() => setScreen("landing")} />
      </div>
    </>
  );
}
