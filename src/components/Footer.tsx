export default function Footer() {
  return (
    <footer className="text-center py-[24px] px-[16px] text-[12px] text-text-light border-t border-[rgba(0,0,0,0.06)]">
      <p>
        © 2026 동전 던지기 — 고민 그만, 행동하자
      </p>
      <p className="mt-[8px]">
        문의:{" "}
        <a
          href="mailto:kwg2358@gmail.com"
          className="underline hover:text-text-sub"
        >
          kwg2358@gmail.com
        </a>
      </p>
    </footer>
  );
}
