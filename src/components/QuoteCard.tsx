export default function QuoteCard() {
  return (
    <div className="bg-bg-card rounded-[20px] p-[28px_24px] mb-[28px] relative border-[1.5px] border-[rgba(245,158,11,0.15)] opacity-0 animate-fade-in-up [animation-delay:0.4s]">
      <span className="absolute top-[12px] left-[16px] text-[48px] text-gold-light opacity-50 leading-none font-[Georgia,serif]">
        &ldquo;
      </span>
      <p className="text-[15px] leading-[1.7] text-text mb-[12px] pl-[4px]">
        오랜 시간 고민만 하며 멈춰 있는 것보다,
        <br />
        단순한 행위로라도 결정을 내리고 실행에 옮기는 것이
        <br />더 큰 행복감을 준다.
      </p>
      <p className="text-[13px] text-text-sub font-medium">
        — 스티븐 레빗, 시카고대 경제학 교수
      </p>
      <div className="inline-flex items-center gap-[6px] mt-[14px] px-[14px] py-[6px] bg-gradient-to-br from-[rgba(245,158,11,0.12)] to-[rgba(245,158,11,0.06)] rounded-[20px] text-[13px] font-semibold text-gold-dark">
        <span className="text-[14px]">🎯</span>
        63%가 실행하고 행복도가 높아졌다
      </div>
    </div>
  );
}
