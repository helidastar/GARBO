<div align="center">

# GARBO 2.0

**Campus Waste Management and Student Engagement Platform**

A mobile-first web application that helps university students dispose of and segregate waste properly, and rewards them for it.

![Status](https://img.shields.io/badge/status-blueprint-lightgrey)
![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

[Documentation](docs/DOCUMENTATION.md) · [Figma Design](https://www.figma.com/design/Fb0rUK6U9Yg9cJtkOQCt3F/Revised-GARBO?node-id=0-1)

</div>

---

## About

GARBO 2.0 is a university-based waste management and student engagement web application. It replaces the earlier barangay/LGU garbage collection concept. The goal is to encourage students to dispose of and segregate their waste properly by making responsible waste behavior **convenient, interactive, and rewarding**. The university, in turn, gets data it can use to improve campus waste management.

```
Student encounters waste  →  GARBO identifies it  →  Student finds the correct bin
→  Disposal is verified by QR  →  Student earns points  →  Missions and leaderboards
→  Better waste habits  →  Useful data for the university
```

## Key Features

| Feature | Description |
|---------|-------------|
| **AI Waste Scanner** | Take a photo of an item. GARBO identifies the disposal category and the correct bin. |
| **Campus Bin Locator** | Indoor campus map with bin locations, accepted waste streams, and fill status. |
| **QR Disposal Verification** | Scan the QR code on a bin to confirm proper disposal and earn points. |
| **GARBO Points and Eco Streaks** | Points for every verified disposal, plus daily streaks for consistency. |
| **Missions and Challenges** | Daily missions and weekly challenges that build good habits. |
| **Green Cup Leaderboard** | Inter-college and individual rankings each semester. |
| **Badges and Rewards** | Achievements, plus points redeemable for print credits, vouchers, and more. |
| **Issue Reporting** | Report overflowing, damaged, or contaminated bins. |
| **Admin Dashboard** | Participation, recycling activity, reports, and waste hotspots for university staff. |

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js (React), Tailwind CSS |
| Backend | Next.js Route Handlers (Node.js) |
| Database and Auth | Supabase (PostgreSQL, Auth, Storage, Realtime) |
| Waste Classification | AI Vision API |
| Bin Identification | QR Codes |
| Hosting | Vercel and Supabase |

## Project Status

The project is in the **blueprint stage**. The student app screens are designed in Figma, and the system architecture, data model, and API are documented. Implementation begins on the `frontend` branch.

## Documentation

The complete project documentation is in **[docs/DOCUMENTATION.md](docs/DOCUMENTATION.md)**. It covers:

- Feature and project information
- User flow and UI breakdown of each screen
- Core concepts (waste streams, points, levels, streaks, missions, badges)
- System architecture diagrams
- Design system (colors, typography, components)
- Data model and API endpoints
- Setup, configuration, and common tasks
- Known issues, open questions, and future enhancements

## Branching Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Stable, reviewed work. Production deploys from this branch. |
| `development` | Integration branch for ongoing work. |
| `frontend` | Implementation of the user interface (planned). |

Changes flow from feature branches into `development`, then into `main` through pull requests.

## Contributors

| Name | GitHub |
|------|--------|
| Charity Ricabo | [@helidastar](https://github.com/helidastar) |
| Cyndrick Abejo | [@Cyn-sharp](https://github.com/Cyn-sharp) |
| John Vincent Fabroa | [@Beynsz](https://github.com/Beynsz) |

## License

This project is licensed under the ISC License.
