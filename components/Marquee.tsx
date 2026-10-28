const WORDS = [
  "Vegan gummies",
  "Oral thin films",
  "Softgels",
  "Liposomal formulations",
  "Pune, India",
];

export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  // four passes keeps the -50% loop seamless even on very wide screens
  const row = [...WORDS, ...WORDS, ...WORDS, ...WORDS];
  return (
    <div className="mq" aria-hidden="true">
      <div className={`mq__row${reverse ? " mq__row--rev" : ""}`}>
        {row.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
    </div>
  );
}
