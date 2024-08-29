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
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm((previousform) => ({ ...form, [name]: value }));
  };
  console.log("form: ", form);
  return (
    <div>
      <div className="form-element">
        <p htmlFor="name">Name:{form.name}</p>
        <input
          type="text"
          name="name"
          placeholder="Please Enter your name"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-element">
        <p htmlFor="dept">Department:{form.dept}</p>
        <input
          type="text"
          name="dept"
          placeholder="Please Enter your department"
          onChange={handleInputChange}
        />
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
        <input type="range" name="name" onChange={handleInputChange} />
      </div>
      <div className="form-element">
        <p htmlFor="gender">Male:{form.gender}</p>
        <input type="radio" name="Male" onChange={handleInputChange} />
        <p htmlFor="gender">FeMale:{form.gender}</p>
        <input type="radio" name="FeMale" onChange={handleInputChange} />
      </div>
      <input type="checkbox" />
      <p>This is the default checkbox to tick</p>
    </div>
  );
};

export default FormELem;
