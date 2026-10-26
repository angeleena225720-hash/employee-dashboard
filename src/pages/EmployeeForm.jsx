import { useState } from "react";

const initialValues = { name: "", designation: "", location: "", salary: "" };

export default function EmployeeForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!values.name.trim()) errs.name = "Name is required";
    if (!values.designation.trim()) errs.designation = "Designation is required";
    if (!values.location.trim()) errs.location = "Location is required";
    if (values.salary === "" || Number(values.salary) <= 0) errs.salary = "Enter a valid salary";
    return errs;
  };

  // No data is posted to a server (per requirements); the form only validates and confirms.
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(values);
      setValues(initialValues);
    }
  };

  const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "designation", label: "Designation", type: "text" },
    { name: "location", label: "Location", type: "text" },
    { name: "salary", label: "Salary", type: "number" },
  ];

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="card-title mb-3">Employee Form</h2>

            {submitted && (
              <div className="alert alert-success" role="alert">
                Employee <strong>{submitted.name}</strong> ({submitted.designation}, {submitted.location})
                saved locally.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {fields.map(({ name, label, type }) => (
                <div className="mb-3" key={name}>
                  <label htmlFor={name} className="form-label">
                    {label}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    min={type === "number" ? "0" : undefined}
                    className={`form-control ${errors[name] ? "is-invalid" : ""}`}
                    value={values[name]}
                    onChange={handleChange}
                  />
                  {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
                </div>
              ))}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
