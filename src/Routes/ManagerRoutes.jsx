import AccordionCompo from "../Components/AccordionCompo/AccordionCompo.jsx";
import MyProfileComp from "../Components/MyProfile/MyProfile.jsx";
import Leaderboard from "../Pages/Leaderboard.jsx";

import { MdOutlineQuiz, MdLeaderboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiTeamFill } from "react-icons/ri";
import Team from "../Pages/Team.jsx";

export const managerPath = [
  {
    name: "Practice",
    path: "practice",
    icon: <MdOutlineQuiz />,
    element: <AccordionCompo />,
  },
  {
    name: "Team Management",
    path: "team",
    icon: <RiTeamFill />,
    element: <Team />,
  },
  {
    name: "Leaderboard",
    path: "leaderboard",
    icon: <MdLeaderboard />,
    element: <Leaderboard />,
  },

  {
    name: "Profile",
    path: "Profile",
    icon: <CgProfile />,
    element: <MyProfileComp />,
  },
];
