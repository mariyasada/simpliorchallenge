import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { GoTrashcan } from "react-icons/go";
import { useLocation } from "../contexts/LocationContext";
import { initialLocationData } from "../components/constants";
import { getsortedLocation } from "../Reducer/utils";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Holiday = () => {
  const [isShow, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="app-container flex flex-column">
      <div className="location-header flex space-between">
        <div className="location-header-left">
          <h2>Holiday</h2>
          <AiOutlineQuestionCircle />
        </div>

        <div className="add-location">
          <input
            type="text"
            className="input-search"
            placeholder="Quick Search"
          />
          <button onClick={() => setShow(true)}>Add Holiday</button>
        </div>
      </div>
      <form className="flex-form">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>DAYS</th>
              <th>DATE</th>
              <th>CREATED ON</th>

              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>52651</td>
              <td>872789</td>
              <td>782197</td>

              <td>333</td>
              <td className="action-btns">
                <button>
                  <GrEdit />
                </button>
                <button>
                  <GoTrashcan />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {/* {isShow && <AddLocation setShow={setShow} />} */}
    </div>
  );
};

export default Holiday;
