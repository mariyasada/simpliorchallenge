import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { GoTrashcan } from "react-icons/go";
import { useLocation, useNavigate } from "react-router";
import { getsortedDepartment, getsortedByPosition } from "../Reducer/utils";
import toast from "react-hot-toast";

const TableComponent = ({
  title,
  setShow,
  prevpath,
  nextpath,
  List,
  Setter,
  setIsEditing,
  dispatch,
  state,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const editDataHandler = (data) => {
    setShow(true);
    setIsEditing(true);
    if (pathname === "/department") {
      Setter(data);
    } else {
      Setter(data);
    }
  };

  const deleteDataHandler = (data) => {
    if (pathname === "/department") {
      dispatch({ type: "DELETE_DEPARTMENT", payload: data });
    } else {
      dispatch({ type: "DELETE_POSITION", payload: data });
    }
  };

  const sortedData =
    pathname === "/department"
      ? getsortedDepartment(List, state)
      : getsortedByPosition(List, state);
  return (
    <div className="app-container flex flex-column">
      <div className="location-header flex space-between">
        <div className="location-header-left">
          <h3>{title}</h3> <AiOutlineQuestionCircle />
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
          <button onClick={() => setShow(true)}>ADD {title}</button>
        </div>
      </div>
      <form className="flex-form" onClick={(e) => e.preventDefault()}>
        <table>
          <thead>
            <tr>
              <th>{title} CODE</th>
              <th>{title} NAME</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length === 0 ? (
              <tr className="font-max">No records found</tr>
            ) : (
              sortedData.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>
                      {pathname === "/department"
                        ? `${data.departmentName}`
                        : `${data.positionName}`}
                    </td>
                    <td className="action-btns">
                      <button onClick={() => editDataHandler(data)}>
                        <GrEdit />
                      </button>
                      <button onClick={(e) => deleteDataHandler(data)}>
                        <GoTrashcan />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
            {/* {pathname === "/department" ? (
              sortedData.length === 0 ? (
                <tr>No records found</tr>
              ) : (
                sortedData.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.departmentName}</td>
                      <td className="action-btns">
                        <button onClick={() => editDataHandler(data)}>
                          <GrEdit />
                        </button>
                        <button onClick={(e) => deleteDataHandler(data)}>
                          <GoTrashcan />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )
            ) : (
              List.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.positionName}</td>
                    <td className="action-btns">
                      <button onClick={() => editDataHandler(data)}>
                        <GrEdit />
                      </button>
                      <button onClick={(e) => deleteDataHandler(data)}>
                        <GoTrashcan />
                      </button>
                    </td>
                  </tr>
                );
              })
            )} */}
          </tbody>
        </table>
      </form>
      <div className="navigation-btn flex space-between">
        <div>
          <button
            className="btn-secondary flex"
            onClick={() => navigate(`${prevpath}`)}
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
            onClick={() => {
              if (sortedData.lenth === 0) {
                toast("add some data", { icon: "✔" });
              } else {
                navigate(`${nextpath}`);
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
    </div>
  );
};

export default TableComponent;
