interface InfoSectionProps {
  onFlip: () => void;
}

export default function InfoSection({ onFlip }: InfoSectionProps) {
  return (
    <section className="mt-[12px] mb-[40px] opacity-0 animate-fade-in-up [animation-delay:0.65s]">
      <h2 className="text-[22px] font-extrabold text-text mb-[20px] text-center">
        왜 우리는 결정을 못 내릴까?
      </h2>

      <div className="flex flex-col gap-[16px]">
        {/* 결정 피로 */}
        <article className="bg-bg-card rounded-[20px] p-[24px] border-[1.5px] border-[rgba(245,158,11,0.15)]">
          <h3 className="text-[15px] font-bold text-text mb-[8px] flex items-center gap-[8px]">
            <span className="text-[18px]">🧠</span>
            결정 피로 (Decision Fatigue)
          </h3>
          <p className="text-[14px] leading-[1.8] text-text-sub">
            우리는 하루에도 수많은 크고 작은 결정을 내립니다. 점심 뭐
            먹을지, 오늘 뭘 입을지 같은 사소한 선택도 뇌에는 에너지를
            소모하는 작업입니다. 결정이 반복될수록 뇌는 지치고, 판단력은
            급격히 떨어집니다. 2011년 Danziger 등의 연구에 따르면, 이스라엘
            판사들의 가석방 승인률이 휴식 직후에는 약 65%였지만 시간이
            지날수록 크게 하락하는 패턴이 관찰되었습니다. 피로해진 뇌는
            &lsquo;현상 유지&rsquo;를 택하게 되고, 이것이 바로 결정 장애의
            핵심 원인입니다.
          </p>
        </article>

        {/* 선택의 역설 */}
        <article className="bg-bg-card rounded-[20px] p-[24px] border-[1.5px] border-[rgba(245,158,11,0.15)]">
          <h3 className="text-[15px] font-bold text-text mb-[8px] flex items-center gap-[8px]">
            <span className="text-[18px]">🤯</span>
            선택의 역설 (Paradox of Choice)
          </h3>
          <p className="text-[14px] leading-[1.8] text-text-sub">
            심리학자 배리 슈워츠는 선택지가 많아질수록 오히려 만족도가
            낮아진다는 사실을 밝혀냈습니다. Iyengar와 Lepper의 2000년 연구에서,
            24가지 잼을 진열했을 때 구매율은 3%에 불과했지만 6가지만 놓았을 때는
            30%로 10배나 높았습니다. 넷플릭스에서 뭘 볼지 30분을 고민하거나,
            앱스토어에서 비슷한 앱들 사이에서 헤매본 경험이 있다면 이미 이
            역설을 경험한 것입니다. 선택지가 너무 많으면 &lsquo;더 나은 선택이
            있을 것&rsquo;이라는 후회가 커져 아무것도 결정하지 못하게 됩니다.
          </p>
        </article>

        {/* 레빗 연구 */}
        <article className="bg-bg-card rounded-[20px] p-[24px] border-[1.5px] border-[rgba(245,158,11,0.15)]">
          <h3 className="text-[15px] font-bold text-text mb-[8px] flex items-center gap-[8px]">
            <span className="text-[18px]">🪙</span>
            동전 던지기의 과학적 근거
          </h3>
          <p className="text-[14px] leading-[1.8] text-text-sub">
            시카고대학교 경제학자 스티븐 레빗은 2만 명 이상이 참여한 대규모
            실험을 진행했습니다. 중요한 결정을 앞두고 고민하는 사람들에게 동전
            던지기로 선택하도록 한 결과, 동전이 지시한 대로 변화를 선택한
            사람들이 6개월 후 유의미하게 더 높은 행복도를 보고했습니다. 이
            연구는 2021년 Review of Economic Studies에 정식 게재되었습니다.
            핵심 교훈은 명확합니다. 어떤 결정을 내리느냐보다, 결정을 내리고
            행동으로 옮기는 것 자체가 행복에 더 큰 영향을 미칩니다.
          </p>
        </article>

        {/* 실용적 팁 */}
        <article className="bg-bg-card rounded-[20px] p-[24px] border-[1.5px] border-[rgba(245,158,11,0.15)]">
          <h3 className="text-[15px] font-bold text-text mb-[8px] flex items-center gap-[8px]">
            <span className="text-[18px]">🎯</span>
            결정을 잘 내리는 실전 팁
          </h3>
          <p className="text-[14px] leading-[1.8] text-text-sub">
            첫째, 2분 안에 결정할 수 있는 일은 바로 실행하세요. 작은 결정을
            미루면 뇌의 에너지만 낭비됩니다. 둘째, 정말 고민되는 문제라면
            동전을 던져보세요. 동전이 공중에 있는 순간, 마음속으로 어느 쪽이
            나오길 바라는지 느껴질 것입니다. 그 감정이 바로 당신의 진짜
            답입니다. 셋째, 완벽한 선택이란 존재하지 않는다는 사실을
            받아들이세요. 어떤 선택이든 그 이후의 노력이 결과를 만듭니다.
          </p>
        </article>

        {/* 결론 */}
        <div className="bg-gradient-to-br from-[rgba(245,158,11,0.08)] to-[rgba(245,158,11,0.03)] rounded-[20px] p-[24px] text-center">
          <p className="text-[15px] leading-[1.8] text-text font-medium">
            완벽한 결정이란 없습니다.
            <br />
            오래 고민한다고 더 좋은 결과가 나오지 않습니다.
            <br />
            고민하는 시간이 길어질수록 후회만 커질 뿐입니다.
            <br />
            <strong className="text-gold-dark">
              지금 동전을 던져보세요. 행동이 답입니다.
            </strong>
          </p>
          <button
            onClick={onFlip}
            className="mt-[20px] inline-flex items-center gap-[10px] px-[40px] py-[16px] bg-gradient-to-br from-gold to-gold-dark text-white border-none rounded-full text-[18px] font-bold cursor-pointer shadow-[0_6px_24px_rgba(245,158,11,0.35)] transition-all duration-200 tracking-[0.3px] hover:scale-105 hover:-translate-y-[2px] hover:shadow-[0_10px_32px_rgba(245,158,11,0.45)] active:scale-[0.97]"
          >
            <span className="text-[22px]">🪙</span>
            동전 던지기
          </button>
        </div>
      </div>
    </section>
  );
}
