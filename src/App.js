import "./styles.css";
import { createContext, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Members from "./components/Members";
import FormWrapper from "./components/Form/FormWrapper";
import { teamsData } from "./data";
import { membersData } from "./data";

export const WrapperContext = createContext(null);

function RouteWrapper() {
  return <>
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
  </>
}

export default function App() {
  const [teams, setTeams] = useState(teamsData['teams']);
  const [members, setMembers] = useState(membersData['members']);

  const updateTeam = useCallback((data, isNew) => {
    setTeams((prev) => {
      if(isNew) {
        const teamCopy = {
          ...data,
          id: Math.floor((1 + Math.random() * 100000)), // generate dump id
        }
        return [...prev, teamCopy];
      } else {
        return prev.map(team => {
          if(team.id === data.id) {
            return {...team, ...data};
          } else return team;
        })
      }
    });
  }, []);

  const updateMember = useCallback((data, isNew) => {
    setMembers((prev) => {
      if(isNew) {
        const memberCopy = {
          ...data,
          id: Math.floor((1 + Math.random() * 100000)), // generate dump id
          team: {
            ...data['team'],
            name: teams.filter(team => team.id === data['team'].id)[0]['name']
          }
        }
        return [...prev, memberCopy];
      } else {
        return prev.map(member => {
          if(member.id === data.id) {
            return {...member, ...data};
          } else return member;
        })
      }
    });
  }, []);

  return (
    <div className="App">
      <WrapperContext.Provider
        value={{ teams, members, updateTeam, updateMember }}
      >
        <RouteWrapper/>
      </WrapperContext.Provider>
    </div>
  );
}
