import type { WasteStream } from "@/lib/streams";

export type SorterItemKey = "cup" | "peel" | "bag";

export type SorterItem = {
  key: SorterItemKey;
  pickerLabel: string;
  detected: string;
  confidence: number;
  stream: WasteStream;
  bin: string;
  instruction: string;
  steps: [string, string];
  station: string;
  distance: string;
};

/** Placeholder content for the landing-page demo. Not real data. */
export const SORTER_ITEMS: SorterItem[] = [
  {
    key: "cup",
    pickerLabel: "Iced coffee cup",
    detected: "Clear iced plastic cup",
    confidence: 99,
    stream: "recycle",
    bin: "Green Recycling Bin",
    instruction: "Empty the liquid first. Cup and lid go in together. The straw goes to landfill.",
    steps: ["Empty liquids", "Drop in the green bin"],
    station: "Station #024, East Atrium",
    distance: "18 m away",
  },
  {
    key: "peel",
    pickerLabel: "Banana peel",
    detected: "Banana peel",
    confidence: 98,
    stream: "compost",
    bin: "Amber Compost Bin",
    instruction: "Food scraps only. Peel off any sticker, then it goes straight in.",
    steps: ["Remove the sticker", "Drop in the amber bin"],
    station: "Station #031, Cafeteria Courtyard",
    distance: "35 m away",
  },
  {
    key: "bag",
    pickerLabel: "Chip bag",
    detected: "Chip bag",
    confidence: 96,
    stream: "landfill",
    bin: "Gray Landfill Bin",
    instruction: "Foil-lined wrappers can’t be recycled. Shake out the crumbs, then bin it.",
    steps: ["Shake out crumbs", "Drop in the gray bin"],
    station: "Station #012, Library Lobby",
    distance: "24 m away",
  },
];
