export type College = {
  rank: number;
  name: string;
  short: string;
  contributors: number;
  points: number;
};

/** Placeholder Green Cup data for the landing page. */
export const COLLEGES: College[] = [
  { rank: 1, name: "College of Engineering", short: "Engineering", contributors: 1420, points: 34290 },
  { rank: 2, name: "School of Information Tech", short: "Information Tech", contributors: 980, points: 31840 },
  { rank: 3, name: "School of Business", short: "Business", contributors: 864, points: 28520 },
];
