import "./styles.css";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Members from "./components/Members";
import FormWrapper from "./components/Form/FormWrapper";
import { teamsData } from "./data";
import { membersData } from "./data";

export const WrapperContext = createContext(null);

export default function App() {
  const [teams, setTeams] = useState(teamsData['teams']);
  const [members, setMembers] = useState(membersData['members']);

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
