import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { WrapperContext } from "../App";

export default function Members() {
  const { members } = useContext(WrapperContext);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const list = id
    ? members.filter((member) => member.team.id === +id)
    : members;

  return (
    <div>
      <h3>About Team</h3>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
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
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
}
