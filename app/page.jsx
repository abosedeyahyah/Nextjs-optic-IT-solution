
import React from "react";
import Home from "./Conponents/Home";
import SolutionPage from "./Conponents/SolutionPage";
import AchievementsPage from "./Conponents/AchievementsPage";
import CustomerPage from "./Conponents/CustomerPage";
const Homepage = () => {
  return (
    <div>
     <Home/>
     <AchievementsPage/>
     <CustomerPage/>
    </div>
  );
};

export default Homepage;
