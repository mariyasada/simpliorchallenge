import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { GoTrashcan } from "react-icons/go";
import { useNavigate } from "react-router";
import AddLocation from "../components/Modal/AddLocation";
import { useLocation } from "../contexts/LocationContext";
import { initialLocationData } from "../components/constants";
import { getsortedLocation } from "../Reducer/utils";
import toast from "react-hot-toast";

export const LocationPage = () => {
  const [isShow, setShow] = useState(false);
  const navigate = useNavigate();
  const {
    state,
    setLocationData,
    locationData,
    isEditing,
    setIsEditing,
    dispatch,
  } = useLocation();
  const { locationList } = state;

  const editHandler = (data) => {
    setShow(true);
    setIsEditing(true);
    setLocationData(data);
  };

  const sortedDataByQuery = getsortedLocation(locationList, state);

  return (
    <div className="app-container flex flex-column">
      <div className="location-header flex space-between">
        <div className="location-header-left">
          <h3>Location</h3> <AiOutlineQuestionCircle />
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
          <button onClick={() => setShow(true)}>Add Location</button>
        </div>
      </div>
      <form className="flex-form" onClick={(e) => e.preventDefault()}>
        <table>
          <thead>
            <tr>
              <th>LOCATION CODE</th>
              <th>LOCATION NAME</th>
              <th>PARENT</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {sortedDataByQuery.length === 0 ? (
              <tr className="font-max">No records found</tr>
            ) : (
              sortedDataByQuery.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.locationName}</td>
                    <td>{data.parentLocation}</td>
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
                            type: "DELETE_DATA",
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
      <div className="navigation-btn flex space-between">
        <div>
          <button className="btn-secondary flex" onClick={() => navigate("/")}>
            <span>
              <BsArrowLeftShort />
            </span>
            <span>Previous</span>
          </button>
        </div>
        <div className="flex space-between">
          <button
            className="btn-primary flex"
            onClick={() => {
              if (sortedDataByQuery.length === 0) {
                toast("add some data", { icon: "✔" });
              } else {
                navigate("/department");
              }
            }}
          >
            <span>Save & Next</span>
            <span>
              <BsArrowRightShort />
            </span>
          </button>
        </div>
      </div>
      {isShow && <AddLocation setShow={setShow} />}
    </div>
  );
};

export default LocationPage;
