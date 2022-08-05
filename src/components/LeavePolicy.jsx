import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { GoTrashcan } from "react-icons/go";
import { useLocation } from "../contexts/LocationContext";
import { initialLocationData } from "../components/constants";
import { getsortedByPolicy, getsortedLocation } from "../Reducer/utils";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import LeavePolicyModal from "./Modal/LeavePolicyModal";

const LeavePolicy = () => {
  const [isShow, setShow] = useState(false);
  const navigate = useNavigate();
  const {
    state,
    leavepolicyData,
    setLeavePolicyData,
    isEditing,
    setIsEditing,
    dispatch,
  } = useLocation();
  const { leaveData } = state;

  const sortedPolicyData = getsortedByPolicy(leaveData, state);

  const editHandler = (data) => {
    setShow(true);
    setIsEditing(true);
    setLeavePolicyData(data);
  };
  return (
    <div className="app-container flex flex-column">
      <div className="location-header flex space-between">
        <div className="location-header-left">
          <h2>Leave</h2>
          <AiOutlineQuestionCircle />
        </div>

        <div className="add-location">
          <input
            type="text"
            className="input-search"
            placeholder="Quick Search"
            onChange={(e) =>
              dispatch({ type: "SEARCH_BY_QUERY", payload: e.target.value })
            }
          />
          <button onClick={() => setShow(true)}>Add Leave Policy</button>
        </div>
      </div>
      <form className="flex-form">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>DAYS</th>
              <th>APPLICABLE YEAR</th>
              <th>CREATED ON</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {sortedPolicyData.length === 0 ? (
              <tr className="font-max"> No records found</tr>
            ) : (
              sortedPolicyData.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{data.policyName}</td>
                    <td>{data.days}</td>
                    <td>{data.date.slice(6)}</td>
                    <td>{data.date}</td>
                    <td>{data.status === false ? "OFF" : "ON"}</td>
                    <td className="action-btns">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          editHandler(data);
                        }}
                      >
                        <GrEdit />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch({
                            type: "DELETE_POLICY",
                            payload: data,
                          });
                        }}
                      >
                        <GoTrashcan />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </form>
      {isShow && <LeavePolicyModal setShow={setShow} />}
    </div>
  );
};

export default LeavePolicy;
