export default function TeamForm({ data, handleChange }) {
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
  