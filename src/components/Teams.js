import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { WrapperContext } from "../App";

export default function Teams() {
  const { teams } = useContext(WrapperContext);
  const navigate = useNavigate();
console.log(teams);
  return (
    <div className="teams-container">
      <h3>Teams Page</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
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
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
