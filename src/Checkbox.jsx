import { useState } from "react";

const EULAObj = () => {
  const [profile, setProfile] = useState({
    iAccept: false,
    isMarried: true,
    name: "",
  });

  const handleInputChange = (e) => {
    const { checked, name, value, type } = e.target;

    console.log({ checked, name, value, type });

    setProfile((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      <div className="form-element">
        <input type="checkbox" name="iAccept" onChange={handleInputChange} />
        <span>I Accept the user agreement</span>
      </div>
      <div className="form-element">
        <input
          type="checkbox"
          name="isMarried"
          checked={profile.isMarried}
          onChange={handleInputChange}
        />{" "}
        {profile.isMarried ? "Married" : "Not Married"}
        <br />
        <span>Please tick if you are married</span>
      </div>
      <div className="form-element">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <p>Acceptance: {profile.iAccept ? "Accepted" : "Not Accepted"}</p>
        <button disabled={!profile.iAccept}>Submit Details</button>
      </div>
    </div>
  );
};

export default EULAObj;
