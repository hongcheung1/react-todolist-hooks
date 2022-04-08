export default function MemberForm({ data, handleChange }) {
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