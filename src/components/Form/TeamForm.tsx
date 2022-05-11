import { TeamType } from "../../data-types";

interface IProps {
  data: TeamType;
  handleChange: React.ChangeEventHandler;
}

export default function TeamForm({ data, handleChange }: IProps) {
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
  