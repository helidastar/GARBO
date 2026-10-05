export type WasteStream = "recycle" | "compost" | "landfill";

type StreamStyle = {
  label: string;
  chip: string;
  stripe: string;
  dot: string;
};

/**
 * Tailwind class strings per waste stream.
 * Written out in full so Tailwind can detect them.
 */
export const STREAM_STYLES: { [K in WasteStream]: StreamStyle } = {
  recycle: {
    label: "Recyclable",
    chip: "bg-success-soft text-success-ink",
    stripe: "border-t-stream-recycle",
    dot: "bg-stream-recycle",
  },
  compost: {
    label: "Compost",
    chip: "bg-highlight text-highlight-ink",
    stripe: "border-t-stream-compost",
    dot: "bg-stream-compost",
  },
  landfill: {
    label: "Landfill",
    chip: "bg-neutral-soft text-neutral-ink",
    stripe: "border-t-stream-landfill",
    dot: "bg-stream-landfill",
  },
};