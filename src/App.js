import "./styles.css";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Teams from "./Teams";
import Members from "./Members";
import FormWrapper from "./FormWrapper";
import { teamsData } from "./data";
import { membersData } from "./data";

export const WrapperContext = createContext(null);

export default function App() {
  const [teams, setTeams] = useState(teamsData);
  const [members, setMembers] = useState(membersData);

  function updateTeam() {
    setTeams((teams) => teams);
  }

  function updateMember() {
    setMembers((members) => members);
  }

  return (
    <div className="App">
      <WrapperContext.Provider
        value={{ teams, members, updateTeam, updateMember }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/create" element={<FormWrapper />} />
            <Route path="/edit" element={<FormWrapper />} />
            <Route path="/members" element={<Members />} />
            <Route path="*" element={<>Error!</>} />
          </Routes>
        </BrowserRouter>
      </WrapperContext.Provider>
    </div>
  );
}
