export default function SectionHeading({ eyebrow, title, lede, id }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 id={id} className="font-display text-3xl text-white text-balance md:text-4xl">
        {title}
      </h2>
      {lede ? <p className="mt-3 text-[15px] leading-relaxed text-white/60">{lede}</p> : null}
    </div>
  );
}
