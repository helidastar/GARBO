/** Game rules. Change values here, not in components. (See docs §13.2) */
export const POINTS = {
  DISPOSAL: 10, // Figma shows both +10 and +15. Decide, then update.
  WEEKLY_CHALLENGE: 50,
} as const;

export const POINTS_PER_PRINT_CREDIT = 50; // 1,240 pts is about 24 credits (to confirm)

/**
 * Single place to change where every "Open the app / Sign in" button goes.
 * Swap "#start" for "/login" once the auth route exists.
 */
export const ROUTES = {
  login: "#start",
  contact: "mailto:", // add the team's email address
} as const;
