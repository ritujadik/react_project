import { useState } from "react";

const FormELem = () => {
  const [form, setForm] = useState({
    name: "",
    dept: "",
    design: "",
    doj: "",
    email: "",
    contactNo: "",
    salary: "",
    gender: "",
    isAccept: false,
  });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((previousform) => ({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  console.log("form: ", form);
  return (
    <div>
      <div className="form-element" style={{ marginBottom: "16px" }}>
        <p htmlFor="name">Name:{form.name}</p>
        <input
          type="text"
          name="name"
          placeholder="Please Enter your name"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-element" style={{ marginBottom: "16px" }}>
        <label htmlFor="dept">Department:{form.dept} </label>
        <select name="dept" id="dept">
          <option value="HR">HR</option>
          <option value="Software Development">Software Development</option>
          <option value="QA">QA</option>
        </select>
      </div>
      <div className="form-element">
        <p htmlFor="design">Designation:{form.design}</p>
        <input
          type="text"
          name="design"
          placeholder="Please Enter your Designation"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-element">
        <p htmlFor="doj">DOJ:{form.doj}</p>
        <input type="date" name="doj" onChange={handleInputChange} />
      </div>
      <div className="form-element">
        <p htmlFor="email">Email:{form.email}</p>
        <input type="email" name="email" onChange={handleInputChange} />
      </div>
      <div className="form-element">
        <p htmlFor="contactNo">Contact:{form.contactNo}</p>
        <input
          type="text"
          name="contactNo"
          placeholder="Please Enter 10 digit mobile No"
          pattern="[1-9][0-9]{9}"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-element">
        <p htmlFor="salary">Salary:{form.salary}</p>
        <input
          type="range"
          name="salary"
          min="1000"
          max="50000"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-element">
        <p>
          Select Gender:{""}
          <span style={{ textTrasnform: "capitalize" }}>{form.gender}</span>
        </p>
        <ul>
          <li>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleInputChange}
            />{" "}
            Male
          </li>
          <li>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleInputChange}
            />{" "}
            Female
          </li>
        </ul>
        <div className="form-element">
          <input type="checkbox" name="isAccept" onChange={handleInputChange} />
          <span>I Accept the user agreement</span>
        </div>
        <div>
          <span>
            <button disabled={!form.isAccept}>Submit</button>
          </span>
          <span>
            <button disabled={!form.isAccept}>Cancel</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormELem;
