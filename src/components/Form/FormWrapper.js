import { useState, useContext } from "react";
import { useLocation, useSearchParams, useNavigate, Link } from "react-router-dom";
import { WrapperContext } from "../../App";
import TeamForm from "./TeamForm";
import MemberForm from "./MemberForm";

export default function FormWrapper() {
  const { teams, members, updateTeam, updateMember } = useContext(WrapperContext);
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const type = searchParams.get("type");
  const mode = pathname.replace("/", "");
  const text = mode === "create" ? "Create" : "Update";
  const title = `${text} ${type}`;
  const id = searchParams.get("id");

  const initialData =
    mode === 'edit' ?
      type === "member"
        ? members.filter((member) => member.id === +id)[0]
        : teams.filter((team) => team.id === +id)[0]
    : type === "member" 
      ? { first_name: '', last_name: '', email: '', team: { id: +id ? +id : 1 }} 
      : { name: ''}
      
  const [data, setData] = useState(initialData);

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    if(name === 'team') {
      setData({
        ...data,
        [name]: {
          id: +value,
          name: teams[+value-1].name
        }
      })
    } else {
      setData({
        ...data,
        [name]: value
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isNew = mode === 'create' ? true : false;
    type === 'team' && updateTeam(data, isNew);
    type === 'member' && updateMember(data, isNew);
    navigate(-1);
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
          <Link to='/'><button type='button'>Back</button></Link>
        </div>
      </form>
    </div>
  );
}
