/**
 * Sample data taken from the Figma screens.
 * Replace these with Supabase / API calls once the backend is ready.
 */

export const currentUser = {
  firstName: "Cyndrick",
  displayName: "Cyndrick G.",
  studentId: "2022-04918",
  college: "College of Engineering",
  collegeTag: "Engineering",
  avatarUrl: "/images/avatar.png",
  points: 1240,
  printCredits: 24,
  streakDays: 7,
  level: 4,
  levelTitle: "Eco-Cadet",
  tier: 4,
  pointsToNextLevel: 260,
  levelProgress: 0.82,
  semesterRank: 14,
  pointsThisWeek: 640,
};

export const todaysMission = {
  title: "Dispose 3 Recyclable Items",
  progress: 2,
  goal: 3,
  points: 25,
};

export const weeklyImpact = {
  itemsRecycled: 23,
  itemsDisposed: 42,
  properSortingPercent: 100,
};

export const nearestBin = {
  code: "#024",
  name: "East Atrium",
  building: "Engineering Hall, 2nd Floor",
  direction: "North Hall",
  distanceM: 18,
  walkTime: "~25 sec walk",
  fillPercent: 40,
};

export const scanResult = {
  item: "Clear Iced Plastic Cup (PETE 1)",
  tag: "Standard Issue",
  confidence: 99,
  verdict: "100% Recyclable",
  bin: "Blue Commingled Bin",
  instructions: "Empty residual liquids at the sink station. Empty cup and lid can go together. Straw to regular landfill.",
  steps: [
    { label: "Step 1", text: "Empty Liquids", icon: "drop", size: [13.333, 16.667] },
    { label: "Step 2", text: "Deposit in Blue", icon: "deposit", size: [16.667, 12.083] },
  ],
  rewardPoints: 15,
};

export type Stream = "recycle" | "compost" | "general";

export const streamFilters: { key: Stream | "all"; label: string; count: number }[] = [
  { key: "all", label: "All", count: 84 },
  { key: "recycle", label: "Recycle", count: 68 },
  { key: "compost", label: "Compost", count: 32 },
  { key: "general", label: "General", count: 54 },
];

export type BinStatus = "ok" | "filling" | "full";

export const mapBins: { code: string; stream: Stream; status: BinStatus; left: string; top: number; selected?: boolean }[] = [
  { code: "#024", stream: "recycle", status: "ok", left: "59.1%", top: 118, selected: true },
  { code: "#018", stream: "recycle", status: "filling", left: "19.4%", top: 83 },
  { code: "#031", stream: "compost", status: "ok", left: "22%", top: 253 },
  { code: "#042", stream: "general", status: "full", left: "78.2%", top: 248 },
];

export const dailyMissions = [
  { title: "Recycle 3 Items", description: "Verify bins via camera barcode or RFID scanner", points: 25, progress: 2, goal: 3, done: false },
  { title: "Morning Campus Walk Clean", description: "Completed this morning", points: 15, progress: 1, goal: 1, done: true },
];

export const weeklyChallenge = {
  category: "Consistency Ritual",
  title: "7-Day Eco Streak",
  description: "Log at least one verified campus deposit every day",
  points: 50,
  daysActive: 5,
  /** done | today | locked */
  days: [
    { day: "M", state: "done" },
    { day: "T", state: "done" },
    { day: "W", state: "done" },
    { day: "T", state: "done" },
    { day: "F", state: "today" },
    { day: "S", state: "locked" },
    { day: "S", state: "locked" },
  ] as { day: string; state: "done" | "today" | "locked" }[],
};

export const leaderboard = {
  term: "Fall Semester 2025",
  rows: [
    { rank: 1, college: "College of Engineering", contributors: 1420, points: 34290, isMine: true },
    { rank: 2, college: "School of Information Tech", contributors: 980, points: 31840 },
    { rank: 3, college: "School of Business", contributors: 864, points: 28520 },
  ],
};

export const profileStats = {
  disposed: 42,
  disposedThisWeek: 8,
  recycled: 28,
  recycledRatio: "66.7%",
  missionsDone: 15,
  missionsPercentile: "Top 12%",
};

export const badges = [
  { emoji: "♻️", name: "Recycling Starter", description: "Sorted first 5 bins…", state: "earned" },
  { emoji: "🔥", name: "7-Day Streak", description: "Consistent daily logging", state: "active" },
  { emoji: "🌱", name: "Eco Contributor", description: "Offset 15kg CO2 equiv.", state: "earned" },
  { emoji: "🏆", name: "Green Champion", description: "", state: "progress", progress: 0.75 },
] as { emoji: string; name: string; description: string; state: "earned" | "active" | "progress"; progress?: number }[];

export const badgeTotals = { unlocked: 3, total: 8 };
