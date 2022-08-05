import React from "react";
import { parentDepartment } from "../constants";
import { useLocation } from "../../contexts/LocationContext";
import "../Modal/modal.css";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { initialPositionData } from "../constants";

const PositionModal = ({ setShow }) => {
  const { state, dispatch, position, setPosition, isEditing, setIsEditing } =
    useLocation();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPosition((prevData) => ({ ...prevData, [name]: value }));
  };

  const clickHandler = () => {
    console.log(position);
    if (position.positionName === "" || position.parentDepartment === "") {
      toast("please fill all the data", { icon: "✔" });
    } else {
      dispatch({ type: "ADD_POSITION", payload: position });
      setShow(false);
      setPosition(initialPositionData);
    }
  };
  const updateHandler = () => {
    if (position.positionName === "" || position.parentDepartment === "") {
      toast("please fill all the data", { icon: "✔" });
    } else {
      dispatch({ type: "UPDATE_POSITION", payload: position });
      setShow(false);
      setPosition(initialPositionData);
    }
  };
  return (
    <div className="modal-outer-container">
      <div className="modal-for-add-location flex flex-column border-round">
        <div className="title-and-close-icon flex">
          <h4 className="title-of-modal">ADD POSITION</h4>
          <FaTimes className="close-icon" onClick={() => setShow(false)} />
        </div>
        <div className="inner-input flex flex-column flex-start ">
          <label htmlFor="Cname">Position Name</label>
          <input
            type="text"
            placeholder="Position Name"
            name="positionName"
            id="positionName"
            onChange={changeHandler}
            value={position.positionName}
            required
          />
        </div>
        <div className="inner-input flex flex-column flex-start ">
          <label htmlFor="parentDepartment" className="text-size-sm">
            ParentDepartment
          </label>
          <select
            className="parent_department"
            name="parentDepartment"
            id="parentDepartment"
            onChange={changeHandler}
            value={position.parentDepartment}
            required
          >
            <option value=""></option>
            {parentDepartment.map((dep) => (
              <option key={dep} value={dep} name={dep}>
                {dep}
              </option>
            ))}
          </select>
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

export default PositionModal;
