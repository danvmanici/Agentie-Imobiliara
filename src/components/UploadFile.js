import React from "react";
import "./UploadFile.css";

const UploadFile = () => {
  return (
    <section className="upload">
      <form className="upload-form">
        <div>
          <input type="checkbox" name="agree" id="terms" value="on" required />
          <label htmlFor="terms">
            I agree to the &nbsp;
            <a href="https://policies.google.com/terms?hl=en-US">
              terms and condition
            </a>
          </label>
        </div>
        <div className="row align-items-center py-3">
          <div className="col-md-3 ps-5">
            <h6 className="mb-0">Upload File</h6>
          </div>
          <div className="col-md-9 pe-5">
            <input
              className="form-control form-control-lg"
              id="formFileLg"
              type="file"
            />
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Save file
        </button>
      </form>
    </section>
  );
};

export default UploadFile;
