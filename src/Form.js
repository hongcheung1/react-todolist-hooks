import { useState, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { WrapperContext } from "./App";

function MemberForm({ data, handleChange }) {
  return (
    <>
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
    </>
  );
}

function TeamForm({ data, handleChange }) {
  return (
    <>
      <div className="form-body">
        <label>Team Name: </label>
        <input
          type="text"
          name="name"
          value={data["name"]}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default function Form({ type, text }) {
  const { teams, members } = useContext(WrapperContext);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const initialData =
    type === "member"
      ? members.filter((member) => member.id === +id)[0]
      : teams.filter((team) => team.id === +id)[0];
  const [data, setData] = useState(initialData);

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      {type === "member" && (
        <MemberForm data={data} handleChange={handleChange} />
      )}
      {type === "team" && <TeamForm data={data} handleChange={handleChange} />}

      <div className="form-body">
        <button type="submit">{text}</button>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </form>
  );
}
