type ProgressBarProps = {
  /** 0 to 1 */
  value: number;
  /** Accessible name, e.g. "Mission progress" */
  label?: string;
  className?: string;
  trackClassName?: string;
  barClassName?: string;
};

export function ProgressBar({
  value,
  label,
  className = "h-2",
  trackClassName = "bg-track",
  barClassName = "bg-primary",
}: ProgressBarProps) {
  const percent = Math.round(Math.min(Math.max(value, 0), 1) * 100);
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`w-full overflow-hidden rounded-xl ${trackClassName} ${className}`}
    >
      <div className={`h-full rounded-xl ${barClassName}`} style={{ width: `${percent}%` }} />
    </div>
  );
}
