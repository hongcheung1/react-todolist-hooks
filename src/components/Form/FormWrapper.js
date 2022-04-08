import { useState, useContext } from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import { WrapperContext } from "../../App";
import TeamForm from "./TeamForm";
import MemberForm from "./MemberForm";

export default function FormWrapper() {
  const { teams, members } = useContext(WrapperContext);
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();

  const type = searchParams.get("type");
  const mode = pathname.replace("/", "");
  const text = mode === "create" ? "Create" : "Update";
  const title = `${text} ${type}`;
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
    <div>
      <h3>{title}</h3>
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
    </div>
  );
}
