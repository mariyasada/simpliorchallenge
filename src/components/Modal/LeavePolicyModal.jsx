import React from "react";
import "../Modal/modal.css";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { useLocation } from "../../contexts/LocationContext";
import { initialLeavePolicyData } from "../constants";

const LeavePolicyModal = ({ setShow }) => {
  const {
    state,
    dispatch,
    leavepolicyData,
    setLeavePolicyData,
    isEditing,
    setIsEditing,
  } = useLocation();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLeavePolicyData((prevData) => ({ ...prevData, [name]: value }));
  };
  const clickHandler = () => {
    if (
      leavepolicyData.policyName === "" ||
      leavepolicyData.days === "" ||
      leavepolicyData.description === "" ||
      leavepolicyData.availability === "" ||
      leavepolicyData.applicableTime === ""
    ) {
      toast("please fill all the data", { icon: "✔" });
    } else {
      dispatch({ type: "ADD_LEAVEPOLICY", payload: leavepolicyData });
      setShow(false);
      setLeavePolicyData(initialLeavePolicyData);
    }
  };
  const updateHandler = () => {
    if (
      leavepolicyData.policyName === "" ||
      leavepolicyData.days === "" ||
      leavepolicyData.description === "" ||
      leavepolicyData.availability === "" ||
      leavepolicyData.applicableTime === ""
    ) {
      toast("please fill all the data", { icon: "✔" });
    } else {
      dispatch({ type: "UPDATE_LEAVEPOLICY", payload: leavepolicyData });
      setShow(false);
      setLeavePolicyData(initialLeavePolicyData);
    }
  };
  return (
    <div className="modal-outer-container ">
      <div className="modal-for-add-location flex flex-column border-round leave-modal">
        <div className="area-of-modal">
          <div className="title-and-close-icon flex">
            <h4 className="title-of-modal">Add LeavePolicy</h4>
            <FaTimes className="close-icon" onClick={() => setShow(false)} />
          </div>
          <div className="inner-input flex flex-column flex-start ">
            <label htmlFor="PolicyName">Policy Name</label>
            <input
              type="text"
              placeholder="Policy Name"
              name="policyName"
              id="policyName"
              onChange={changeHandler}
              value={leavepolicyData.policyName}
              required
            />
          </div>
          <div className="inner-input flex flex-column flex-start ">
            <label htmlFor="Leave Days">Leave Days</label>
            <input
              type="number"
              placeholder="Number Of Days"
              name="days"
              id="days"
              onChange={changeHandler}
              value={leavepolicyData.days}
              required
            />
          </div>
          <div className="inner-input flex flex-column flex-start ">
            <label htmlFor="Leave Days">Leave Description</label>
            <textarea
              type="text"
              rows={10}
              cols={44}
              placeholder="Leave Description"
              name="description"
              id="description"
              onChange={changeHandler}
              value={leavepolicyData.description}
              required
            />
          </div>
          <div className="inner-input flex flex-column flex-start">
            <label htmlFor="Applicable Time" className="mt-2">
              Applicable Time
            </label>

            {[" Applicable Immediately", "Scheduled for Later"].map((data) => {
              return (
                <label
                  htmlFor="applicableTime"
                  className="flex mt-2"
                  key={data}
                >
                  <input
                    type="radio"
                    name="applicableTime"
                    id={data}
                    className="label-input"
                    onChange={changeHandler}
                    value={data}
                  />
                  {data}
                </label>
              );
            })}
          </div>
          <div className="inner-input flex flex-column flex-start">
            <label htmlFor="Availability" className="mt-2">
              Availability
            </label>
            {[
              "All Leaves available to apply",
              "Leaves available on prorated basis",
            ].map((data) => {
              return (
                <label htmlFor="availability" className="flex mt-2" key={data}>
                  <input
                    type="radio"
                    name="availability"
                    id={data}
                    className="label-input"
                    onChange={changeHandler}
                    value={data}
                  />
                  {data}
                </label>
              );
            })}
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
    </div>
  );
};

export default LeavePolicyModal;
