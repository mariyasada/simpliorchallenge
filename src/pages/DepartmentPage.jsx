import React, { useState } from "react";
import AddDepartmentModal from "../components/Modal/AddDepartmentModal";
import CommonModal from "../components/Modal/CommonModal";
import TableComponent from "../components/tableComponent";
import { useLocation } from "../contexts/LocationContext";

const DepartmentPage = () => {
  const [isShow, setShow] = useState(false);
  const { state, dispatch, deptName, setDepartment, setIsEditing } =
    useLocation();
  const { departmentList } = state;

  return (
    <div>
      <TableComponent
        title="DEPARTMENT"
        setShow={setShow}
        prevpath="/location"
        nextpath="/position"
        List={departmentList}
        Setter={setDepartment}
        setIsEditing={setIsEditing}
        dispatch={dispatch}
        state={state}
      />
      {isShow && <AddDepartmentModal setShow={setShow} />}
    </div>
  );
};

export default DepartmentPage;
