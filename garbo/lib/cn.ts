/** Tiny className joiner. Swap for clsx + tailwind-merge later if you want. */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
