import AccordionCompo from "../Components/AccordionCompo/AccordionCompo.jsx";
import ContextWiseQus from "../Components/ContextWiseQus/ContextWiseQus.jsx";
import ChangePassword from "../Pages/ChangePassword.jsx";
import Leaderboard from "../Pages/Leaderboard.jsx";
import ResultCongratulation from "../Pages/ResultCongratulation.jsx";

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
  {
    path: "context-qus",
    element: <ContextWiseQus />,
  },
  {
    path: "congratulations",
    element: <ResultCongratulation />,
  },
  {
    path: "changepassword",
    element: <ChangePassword />,
  },
];
