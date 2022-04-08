import {useContext} from 'react';
import { WrapperContext } from "../../App";

export default function MemberForm({ data, handleChange }) {
  const { teams } = useContext(WrapperContext);

  return (
    <div>
      <div className="form-body">
        <label>First Name: </label>
        <input
          type="text"
          name="first_name"
          value={data["first_name"]}
          onChange={handleChange}
        />
      </div>
      <div className="form-body">
        <label>Last Name: </label>
        <input
          type="text"
          name="last_name"
          value={data["last_name"]}
          onChange={handleChange}
        />
      </div>
      <div className="form-body">
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={data["email"]}
          onChange={handleChange}
        />
      </div>
      <div className="form-body">
        <label htmlFor='team'>Select Team: </label>
        <select name='team' id='team' defaultValue={data['team'].id} onChange={handleChange}>
          <option value="DEFAULT" disabled>Choose a team ...</option>
          {teams.map((team, index) => 
            <option 
              key={index}
              value={team.id}
            >
              {team.name}
            </option>)
          }
        </select>
      </div>
    </div>
  );
}