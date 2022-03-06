import React from "react";
import "./UploadFile.css";

const UploadFile = () => {
  return (
    <section className="upload">
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
          <div className="small text-muted mt-2">
            Upload your file. Max file size 50 MB
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadFile;
