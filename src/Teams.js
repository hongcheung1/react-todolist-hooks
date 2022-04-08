import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { WrapperContext } from "./App";

export default function Teams() {
  const { teams } = useContext(WrapperContext);

  return (
    <div className="teams-container">
      <h3>Teams Page</h3>

      <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Member Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((item, index) => (
            <tr key={index}>
              <td>
                <Link to={`/members?id=${item.id}`}>{item.name}</Link>
              </td>
              <td>{item.member_count}</td>
              <td>
                <Link to={`/edit?type=team&id=${item.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/create?type=team">
        <button>Add Team</button>
      </Link>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
}
