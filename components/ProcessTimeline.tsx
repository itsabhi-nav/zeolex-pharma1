import { PROCESS_STEPS } from "@/lib/content";

export default function ProcessTimeline({ paper = false }: { paper?: boolean }) {
  return (
    <div className={`rail${paper ? " rail--paper" : ""}`}>
      {PROCESS_STEPS.map((s) => (
        <div className="rail__step" key={s.name}>
          <h3>{s.name}</h3>
          <p>{s.copy}</p>
        </div>
      ))}
    </div>
  );
}
