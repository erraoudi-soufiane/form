import { FormEvent } from "react";

const Form = () => {
  const handleSubmission = (event: FormEvent) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmission}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Number
        </label>
        <input type="number" className="form-control" />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
