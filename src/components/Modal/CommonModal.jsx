import React from "react";
import { FaTimes } from "react-icons/fa";
import { useLocation } from "react-router";

const CommonModal = ({ title, setShow }) => {
  const { depName, setDepartment } = useLocation();
  const { pathname } = useLocation();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (pathname === "/department") {
      setDepartment((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  return (
    <div className="modal-outer-container">
      <div className="modal-for-add-location flex flex-column border-round">
        <div className="title-and-close-icon flex">
          <h4 className="title-of-modal"> ADD {title}</h4>
          <FaTimes className="close-icon" onClick={() => setShow(false)} />
        </div>
        <div className="inner-input flex flex-column flex-start ">
          <label htmlFor={`${title}`}>{`${title} Name`}</label>
          <input
            type="text"
            placeholder={`${title} Name`}
            name={`${title}`}
            id={`${title}`}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="inner-input flex flex-column flex-start ">
          <label htmlFor="parent">Parent Department</label>
          <input
            type="text"
            placeholder="Parent"
            name="Parent"
            id="parent"
            onChange={changeHandler}
            required
          />
        </div>
        <div className="btn-container flex">
          <button
            className="btn-secondary border-round"
            onClick={() => console.log(depName)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
