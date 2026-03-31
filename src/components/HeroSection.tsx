interface HeroSectionProps {
  onFlip: () => void;
}

export default function HeroSection({ onFlip }: HeroSectionProps) {
  return (
    <div className="text-center mb-[36px] opacity-0 animate-fade-in-up [animation-delay:0.1s]">
      <h1 className="text-[36px] font-extrabold leading-[1.3] text-text mb-[12px] sm:text-[40px]">
        <span className="bg-gradient-to-br from-gold to-gold-dark bg-clip-text text-transparent">
          고민 그만,
        </span>
        <br />
        행동하자
      </h1>
      <p className="text-[16px] text-text-sub leading-[1.6] font-normal">
        최고의 결정은 결정을 내리는 것이다
      </p>
    </div>
  );
}
