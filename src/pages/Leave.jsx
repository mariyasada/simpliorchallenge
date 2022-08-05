import React from "react";
import Holiday from "../components/Holiday";
import LeavePolicy from "../components/LeavePolicy";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const LeavePage = () => {
  const navigate = useNavigate();
  return (
    <div className="new-container">
      <LeavePolicy />
      <Holiday />
      <div className="navigation-btn flex space-evenly">
        <div>
          <button
            className="btn-secondary flex"
            onClick={() => navigate("/position")}
          >
            <span>
              <BsArrowLeftShort />
            </span>
            <span>Previous</span>
          </button>
        </div>
        <div className="flex space-between">
          <button
            className="btn-primary flex"
            onClick={() => toast("SUBMITTING DATA", { icon: "✔" })}
          >
            <span>Submit</span>
            <span>
              <BsArrowRightShort />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeavePage;
