"use client";

import { useState, useRef, useCallback } from "react";
import CoinCharacter from "./CoinCharacter";

const encourageMessages = [
  "과정을 믿어라.",
  "당신의 길이 정해졌다.",
  "이제 행동할 때다.",
  "결정이 내려졌다.",
  "행동이 절망의 해독제다.",
  "때로는 그냥 선택하는 것이 최고의 선택이다.",
];

interface FlipScreenProps {
  onBack: () => void;
}

type FlipState = "idle" | "flipping" | "result";
type CoinResult = "heads" | "tails" | null;

export default function FlipScreen({ onBack }: FlipScreenProps) {
  const [state, setState] = useState<FlipState>("idle");
  const [result, setResult] = useState<CoinResult>(null);
  const [encourage, setEncourage] = useState("");
  const coinRef = useRef<HTMLDivElement>(null);

  const flipCoin = useCallback(() => {
    if (state === "flipping") return;

    setState("flipping");
    setResult(null);

    const isHeads = Math.random() > 0.5;
    const finalRotation = isHeads ? "2880deg" : "3060deg";

    const coin = coinRef.current;
    if (coin) {
      coin.style.setProperty("--final-rotation", finalRotation);
      coin.classList.remove("flipping");
      void coin.offsetWidth;
      coin.classList.add("flipping");
    }

    setTimeout(() => {
      setResult(isHeads ? "heads" : "tails");
      setEncourage(
        encourageMessages[Math.floor(Math.random() * encourageMessages.length)]
      );
      setState("result");
    }, 2100);
  }, [state]);

  const reset = useCallback(() => {
    setState("idle");
    setResult(null);
    const coin = coinRef.current;
    if (coin) {
      coin.classList.remove("flipping");
      coin.style.setProperty("--final-rotation", "0deg");
      coin.style.transform = "rotateY(0deg)";
    }
  }, []);

  return (
    <div className="relative z-1 min-h-dvh flex flex-col items-center justify-center px-[24px] py-[40px]">
      <button
        onClick={onBack}
        className="absolute top-[20px] left-[24px] bg-transparent border-none text-[28px] cursor-pointer text-text-sub p-[8px] rounded-[12px] transition-all duration-200 hover:bg-[rgba(0,0,0,0.05)]"
      >
        ←
      </button>

      {/* 안내 텍스트 */}
      <div
        className="text-center mb-[40px] transition-opacity duration-400"
        style={{ opacity: state === "flipping" ? 0.3 : 1 }}
      >
        <p className="text-[18px] font-semibold text-text mb-[8px]">
          마음속으로 고민을 떠올리세요
        </p>
        <p className="text-[14px] text-text-light">
          준비됐으면 아래 버튼을 눌러주세요
        </p>
      </div>

      {/* 동전 */}
      <div className="mb-[40px]" style={{ perspective: "1000px" }}>
        <div
          ref={coinRef}
          className="w-[250px] h-[250px] relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* 앞면 */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-shine via-gold to-gold-dark flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              boxShadow:
                "0 8px 32px rgba(245,158,11,0.3), 0 2px 8px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.4)",
            }}
          >
            <div className="absolute inset-[8px] rounded-full border-[2.5px] border-[rgba(255,255,255,0.45)]" />
            <div className="absolute inset-[16px] rounded-full bg-gradient-to-br from-[#FFE880] to-[#F5B731] flex flex-col items-center justify-center">
              <CoinCharacter variant="happy" label="해봐!" />
            </div>
          </div>
          {/* 뒷면 */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E8B84B] via-[#C9952A] to-[#A67B1E] flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              boxShadow:
                "0 8px 32px rgba(245,158,11,0.3), 0 2px 8px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.4)",
            }}
          >
            <div className="absolute inset-[8px] rounded-full border-[2.5px] border-[rgba(255,255,255,0.3)]" />
            <div className="absolute inset-[16px] rounded-full bg-gradient-to-br from-[#D4A94B] to-[#B8892F] flex flex-col items-center justify-center">
              <CoinCharacter variant="sad" label="하지마!" />
            </div>
          </div>
        </div>
      </div>

      {/* 결과 */}
      <div className="text-center min-h-[120px] flex flex-col items-center justify-center mb-[24px]">
        {result && (
          <>
            <p
              className={`text-[32px] font-extrabold mb-[8px] transition-all duration-400 ${
                result === "heads" ? "text-gold-dark" : "text-[#8B6914]"
              }`}
              style={{
                animation: "fadeInUp 0.4s cubic-bezier(0.34,1.56,0.64,1)",
              }}
            >
              {result === "heads" ? "해봐!" : "하지마!"}
            </p>
            <p
              className="text-[15px] text-text-sub leading-[1.5]"
              style={{ animation: "fadeInUp 0.4s ease 0.2s both" }}
            >
              {result === "heads"
                ? "동전이 말했어요 — 도전하세요!"
                : "동전이 말했어요 — 이번엔 쉬어가세요."}
            </p>
            <p
              className="mt-[12px] text-[13px] text-text-light italic"
              style={{ animation: "fadeInUp 0.4s ease 0.4s both" }}
            >
              &ldquo;{encourage}&rdquo;
            </p>
          </>
        )}
      </div>

      {/* 버튼 */}
      <div className="flex gap-[12px]">
        {state !== "result" ? (
          <button
            onClick={flipCoin}
            disabled={state === "flipping"}
            className="px-[32px] py-[14px] bg-gradient-to-br from-gold to-gold-dark text-white border-none rounded-full text-[16px] font-bold cursor-pointer shadow-[0_4px_16px_rgba(245,158,11,0.3)] transition-all duration-200 hover:scale-105 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(245,158,11,0.4)] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0"
          >
            동전 던지기
          </button>
        ) : (
          <button
            onClick={reset}
            className="px-[32px] py-[14px] bg-transparent text-text-sub border-[1.5px] border-[rgba(0,0,0,0.1)] rounded-full text-[16px] font-bold cursor-pointer transition-all duration-200 hover:bg-[rgba(0,0,0,0.03)]"
          >
            다시 던지기
          </button>
        )}
      </div>

    </div>
  );
}
