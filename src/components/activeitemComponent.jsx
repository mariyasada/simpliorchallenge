import React from "react";

const items = [
  "Company Details",
  "Location",
  "Department",
  "Position",
  "Leave Policy",
];

export const ActiveItemComponent = () => {
  return (
    <div className="flex item-style">
      {items.map((item) => {
        return (
          <span className="item-style" key={item}>
            {item}
          </span>
        );
      })}
    </div>
  );
};
