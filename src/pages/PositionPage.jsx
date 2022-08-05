import React, { useState } from "react";
import PositionModal from "../components/Modal/PositionModal";
import TableComponent from "../components/tableComponent";
import { useLocation } from "../contexts/LocationContext";

const PositionPage = () => {
  const [isShow, setShow] = useState(false);
  const { state, dispatch, position, setPosition, setIsEditing } =
    useLocation();
  const { positionList } = state;
  return (
    <div>
      <TableComponent
        title="POSITION"
        setShow={setShow}
        prevpath="/department"
        nextpath="/leave"
        List={positionList}
        Setter={setPosition}
        setIsEditing={setIsEditing}
        dispatch={dispatch}
        state={state}
      />
      {isShow && <PositionModal setShow={setShow} />}
    </div>
  );
};

export default PositionPage;
