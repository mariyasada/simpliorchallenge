import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { city, country, formConstants, state } from "../components/constants";
import { useCompany } from "../contexts/companyContext";

export const MainPage = () => {
  const [formData, setFormData] = useState(formConstants);
  const { storeData } = useCompany();
  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const navigate = useNavigate();
  const checkData = () => {
    if (
      formData.companyName === "" ||
      formData.DBA === "" ||
      formData.state === "" ||
      formData.country === "" ||
      formData.city === "" ||
      formData.zipcode === "" ||
      formData.line1 === "" ||
      formData.line2 === ""
    ) {
      toast("please fill all the fileds", { icon: "✔" });
    } else if (formData.zipcode.length < 6 || formData.zipcode.length > 6) {
      toast("enter valid zipcode", { icon: "✔" });
    } else {
      storeData(formData);
      navigate("/location");
    }
  };
  return (
    <div className="form-container flex flex-column">
      <h1 className="left">Company Details</h1>
      <form
        className="form-details"
        onSubmit={(e) => {
          e.preventDefault();
          storeData(formData);
        }}
      >
        <div className="input-containers flex space-between">
          <div className="inner-input flex flex-column flex-start ">
            <label htmlFor="Cname">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              name="companyName"
              id="companyName"
              onChange={formChangeHandler}
              required
            />
          </div>
          <div className="inner-input flex flex-column flex-start  ">
            <label htmlFor="DBA">Doing Bussiness As (DBA)</label>
            <input
              type="text"
              placeholder="DBA"
              name="DBA"
              id="DBA"
              onChange={formChangeHandler}
              required
            />
          </div>
        </div>

        <div className="left-side-text flex flex-column">
          <h3>Headquarters Address</h3>
          <p>This address set as headquarter.</p>
        </div>
        <div className="all-selects-container flex space-between">
          <div className="select-container flex flex-column flex-start ">
            <label htmlFor="country" className="text-size-sm">
              Country
            </label>
            <select
              className="selectinput"
              name="country"
              id="country"
              onChange={formChangeHandler}
              required
            >
              <option value=""></option>
              {country.map((country) => (
                <option key={country} value={country} name={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          {/* ///// */}
          <div className="select-container flex flex-column flex-start ">
            <label htmlFor="state" className="text-size-sm">
              State/Province
            </label>
            <select
              className="selectinput"
              name="state"
              id="state"
              onChange={formChangeHandler}
              required
            >
              <option value=""></option>
              {state.map((state) => (
                <option key={state} value={state} name={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          {/* //// */}
          <div className="select-container flex flex-column flex-start ">
            <label htmlFor="city" className="text-size-sm">
              City
            </label>
            <select
              className="selectinput"
              name="city"
              id="city"
              onChange={formChangeHandler}
              required
            >
              <option value=""></option>
              {city.map((ct) => (
                <option key={ct} value={ct} name={city}>
                  {ct}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="all-selects-container flex space-between">
          <div className="inner-input flex flex-column flex-start ">
            <label htmlFor="zipcode"> Zip code</label>
            <input
              type="number"
              placeholder="Zipcode"
              name="zipcode"
              id="zipcode"
              onChange={formChangeHandler}
              required
            />
          </div>
          <div className="inner-input flex flex-column flex-start ">
            <label htmlFor="line1"> Line1</label>
            <input
              type="text"
              placeholder="line1"
              name="line1"
              id="line1"
              onChange={formChangeHandler}
              required
            />
          </div>
          <div className="inner-input flex flex-column flex-start ">
            <label htmlFor="line2">Line2</label>
            <input
              type="text"
              placeholder="line2"
              name="line2"
              id="line2"
              onChange={formChangeHandler}
              required
            />
          </div>
        </div>
        <div className="btn-container flex space-between">
          <button className=" btn-secondary" onClick={() => navigate("/")}>
            Prev
          </button>
          <button className=" btn-primary" onClick={checkData}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
