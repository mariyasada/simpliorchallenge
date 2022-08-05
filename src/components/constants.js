import uniqid from "uniqid";
export const country=[
    "Afghanistan",
"Albania",
"Algeria",
"Andorra",
"Angola",
"Antigua and Barbuda",
"Argentina",
"Armenia",
"Australia",
"India","china","Russia"
];
export const state=["Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry"];

export const city=["Mumbai","Delhi","Ahmedabad","Banglore","Chennai","Kolkata","surat","Pune","Kanpur","Nagpur"];

export const formConstants={companyName:"",DBA:"",country:"",state:"",city:"",zipcode:"",line1:"",line2:""};

export const parentDepartment=["Head Department","Team Lead","HR Department","Project Lead","BEO"];

export const initialLocationData={
    id: uniqid.time(),
    locationName: "",
    parentLocation: "",
  }

  export const initialdepartmentData={
    id: uniqid.time(),
    departmentName: "",
    parentDepartment: "",
  };

  export const initialPositionData={
    id: uniqid.time(),
    positionName: "",
    parentDepartment: "",
  }

  export const initialLeavePolicyData={
    id:uniqid.time(),
    policyName:"",
    days:"",
    description:"",
    applicableTime:"",
    availability:"",
    date:new Date().toLocaleDateString(),
    status:Boolean(Math.round(Math.random()))
  }