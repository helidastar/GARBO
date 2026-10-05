export function PanelTitle({ title, note }: { title: string; note: string }) {
  return (
    <div className="mb-3.5 flex items-baseline justify-between gap-3">
      <h3>{title}</h3>
      <span className="text-sm text-soft">{note}</span>
    </div>
  );
}
