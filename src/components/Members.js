import { useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { WrapperContext } from "../App";

export default function Members() {
  const { members } = useContext(WrapperContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const id = searchParams.get("id");
  const list = id
    ? members.filter((member) => member.team.id === +id)
    : members;

  return (
    <div>
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
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.team.name}</td>
              <td>
                <Link to={`/edit?type=member&id=${item.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/create?type=member">
        <button>Add Member</button>
      </Link>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
