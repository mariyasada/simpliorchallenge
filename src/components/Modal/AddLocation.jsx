import React, { useState } from "react";
import "../Modal/modal.css";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { useLocation } from "../../contexts/LocationContext";
import { initialLocationData } from "../constants";

const AddLocation = ({ setShow }) => {
  const {
    state,
    dispatch,
    locationData,
    setLocationData,
    isEditing,
    setIsEditing,
  } = useLocation();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLocationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clickHandler = () => {
    if (
      locationData.locationName === "" ||
      locationData.parentLocation === ""
    ) {
      toast("please fill all the data", { icon: "✔" });
    } else {
      dispatch({ type: "ADD_LOCATION", payload: locationData });
      setShow(false);
      setLocationData(initialLocationData);
    }
  };
  const updateHandler = () => {
    if (
      locationData.locationName === "" ||
      locationData.parentLocation === ""
    ) {
      toast("please fill all the data", { icon: "✔" });
    } else {
      dispatch({ type: "UPDATE_LOCATION", payload: locationData });
      setShow(false);
      setLocationData(initialLocationData);
    }
  };
  return (
    <div className="modal-outer-container">
      <div className="modal-for-add-location flex flex-column border-round">
        <div className="title-and-close-icon flex">
          <h4 className="title-of-modal">Add Location</h4>
          <FaTimes className="close-icon" onClick={() => setShow(false)} />
        </div>
        <div className="inner-input flex flex-column flex-start ">
          <label htmlFor="Cname">Location Name</label>
          <input
            type="text"
            placeholder="Location Name"
            name="locationName"
            id="locationName"
            onChange={changeHandler}
            value={locationData.locationName}
            required
          />
        </div>
        <div className="inner-input flex flex-column flex-start ">
          <label htmlFor="parentLocation">Parent</label>
          <input
            type="text"
            placeholder="Parent"
            name="parentLocation"
            id="parentLocation"
            onChange={changeHandler}
            value={locationData.parentLocation}
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

export default AddLocation;
