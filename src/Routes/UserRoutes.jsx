import AccordionCompo from "../Components/AccordionCompo/AccordionCompo.jsx";
import Leaderboard from "../Pages/Leaderboard.jsx";

export const userPath = [
  {
    name: "Practice",
    path: "practice",
    element: <AccordionCompo />,
  },
  {
    name: "Leaderboard",
    path: "leaderboard",
    element: <Leaderboard />,
  },
  {
    name: "Profile",
    path: "Profile",
    element: <Leaderboard />,
  },
];
