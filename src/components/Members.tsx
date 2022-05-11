import { useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { WrapperContext } from "../App";
import { MemberType, TeamType } from "../data-types";

export default function Members() {
  const { members, teams, handleRemove } = useContext(WrapperContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const id = searchParams.get("id");
  const list = id
    ? members.filter((member: MemberType) => member.team.id === +id)
    : members;

  function getTeamName(id: number) {
    if(!id) return;
    return teams.filter((team: TeamType) => team.id === id)[0]['name'];
  }

  return (
    <div className="table-container">
      <h3>Members</h3>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Team</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item: MemberType, index: number) => (
            <tr key={index}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{getTeamName(item.team.id)}</td>
              <td>
                <Link to={`/edit?type=member&id=${item.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
              <td>
                <button onClick={() => handleRemove('member', item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="actions">
        <Link to={`/create?type=member&id=${id}`}>
          <button>Add Member</button>
        </Link>
        <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    </div>
  );
}
