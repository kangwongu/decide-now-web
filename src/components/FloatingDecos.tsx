export default function FloatingDecos() {
  return (
    <>
      <div
        className="fixed w-[120px] h-[120px] bg-gold-light opacity-15 pointer-events-none z-0 -top-[20px] -right-[30px] animate-float-deco"
        style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
      />
      <div
        className="fixed w-[80px] h-[80px] bg-pink opacity-15 pointer-events-none z-0 top-[30%] -left-[20px]"
        style={{
          borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%",
          animation: "floatDeco 5s ease-in-out infinite 1s",
        }}
      />
      <div
        className="fixed w-[60px] h-[60px] bg-mint opacity-15 pointer-events-none z-0 bottom-[20%] -right-[10px]"
        style={{
          borderRadius: "50% 50% 30% 70% / 60% 40% 60% 40%",
          animation: "floatDeco 7s ease-in-out infinite 2s",
        }}
      />
      <div
        className="fixed w-[90px] h-[90px] bg-lavender opacity-15 pointer-events-none z-0 bottom-[5%] -left-[25px]"
        style={{
          borderRadius: "40% 60% 70% 30% / 50% 30% 70% 50%",
          animation: "floatDeco 5.5s ease-in-out infinite 0.5s",
        }}
      />
    </>
  );
}
