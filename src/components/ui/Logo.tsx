export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5 font-display text-[1.3rem] font-extrabold tracking-[.02em] text-ink">
      <span aria-hidden className="grid size-8 place-items-center rounded-[10px] bg-brand">
        <svg viewBox="0 0 24 24" className="size-5">
          <path d="M12 4a8 8 0 1 0 8 8" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M16.2 11.2h7.6L20 6.6z" fill="#fff" />
        </svg>
      </span>
      GARBO
    </span>
  );
}
