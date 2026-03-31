interface CoinCharacterProps {
  variant?: "happy" | "sad";
  label?: string;
}

export default function CoinCharacter({
  variant = "happy",
  label,
}: CoinCharacterProps) {
  return (
    <>
      <div className="relative w-[80px] h-[60px]">
        {/* 눈 */}
        <div
          className={`absolute w-[10px] h-[12px] rounded-full left-[16px] ${
            variant === "happy"
              ? "bg-[#5D4E37] top-[8px]"
              : "bg-[#6B5A3E] top-[12px]"
          } after:content-[''] after:absolute after:w-[4px] after:h-[4px] after:bg-white after:rounded-full after:top-[1px] after:right-[1px]`}
        />
        <div
          className={`absolute w-[10px] h-[12px] rounded-full right-[16px] ${
            variant === "happy"
              ? "bg-[#5D4E37] top-[8px]"
              : "bg-[#6B5A3E] top-[12px]"
          } after:content-[''] after:absolute after:w-[4px] after:h-[4px] after:bg-white after:rounded-full after:top-[1px] after:right-[1px]`}
        />
        {/* 볼터치 */}
        <div className="absolute w-[16px] h-[10px] bg-[rgba(252,165,165,0.5)] rounded-full top-[22px] left-[4px]" />
        <div className="absolute w-[16px] h-[10px] bg-[rgba(252,165,165,0.5)] rounded-full top-[22px] right-[4px]" />
        {/* 입 */}
        {variant === "happy" ? (
          <div className="absolute w-[22px] h-[12px] border-[2.5px] border-[#5D4E37] border-t-0 rounded-b-[50%] bottom-[8px] left-1/2 -translate-x-1/2" />
        ) : (
          <div className="absolute w-[18px] h-[8px] border-[2.5px] border-[#6B5A3E] border-b-0 rounded-t-[50%] bottom-[10px] left-1/2 -translate-x-1/2" />
        )}
      </div>
      {label && (
        <span className="text-[12px] font-bold text-[#8B6914] tracking-[2px] mt-[4px]">
          {label}
        </span>
      )}
    </>
  );
}
