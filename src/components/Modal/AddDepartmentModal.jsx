import React from "react";
import { useLocation } from "../../contexts/LocationContext";
import "../Modal/modal.css";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { initialdepartmentData } from "../constants";

const AddDepartmentModal = ({ setShow }) => {
  const { state, dispatch, depName, setDepartment, isEditing, setIsEditing } =
    useLocation();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setDepartment((prevData) => ({ ...prevData, [name]: value }));
  };

  const clickHandler = () => {
    if (depName.departmentName === "" || depName.parentDepartment === "") {
      toast("please fill all the data", { icon: "✔" });
    } else {
      dispatch({ type: "ADD_DEPARTMENT", payload: depName });
      setShow(false);
      setDepartment(initialdepartmentData);
    }
  };
  const updateHandler = () => {
    if (depName.departmentName === "" || depName.parentDepartment === "") {
      toast("please fill all the data", { icon: "✔" });
    } else {
      dispatch({ type: "UPDATE_DEPARTMENTDATA", payload: depName });
      setShow(false);
      setDepartment(initialdepartmentData);
    }
  };
  return (
    <div className="modal-outer-container">
      <div className="modal-for-add-location flex flex-column border-round">
        <div className="title-and-close-icon flex">
          <h4 className="title-of-modal">ADD DEPARTMENT</h4>
          <FaTimes className="close-icon" onClick={() => setShow(false)} />
        </div>
        <div className="inner-input flex flex-column flex-start ">
          <label htmlFor="Cname">Department Name</label>
          <input
            type="text"
            placeholder="Department Name"
            name="departmentName"
            id="departmentName"
            onChange={changeHandler}
            value={depName.departmentName}
            required
          />
        </div>
        <div className="inner-input flex flex-column flex-start ">
          <label htmlFor="parentLocation">Parent Department</label>
          <input
            type="text"
            placeholder="Parent"
            name="parentDepartment"
            id="parentDepartment"
            onChange={changeHandler}
            value={depName.parentDepartment}
            required
          />
        </div>
        <div className="btn-container flex">
          <button
            className="btn-secondary border-round"
            onClick={isEditing ? updateHandler : clickHandler}
          >
            {isEditing ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDepartmentModal;
