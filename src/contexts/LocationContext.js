import { createContext,useContext ,useReducer,useState } from "react";
import uniqid from "uniqid";
import { initialLeavePolicyData, initialPositionData } from "../components/constants";
import { combineReducer } from "../Reducer/combineReducer";


 const LocationContext = createContext();
 const initialState={
    locationList:[],
    searchByQuery:"",
    departmentList:[],
    positionList:[],
    leaveData:[],
    hodiday:[],
 }
 

 const LocationProvider =({children})=>{
    const [locationData, setLocationData] = useState({
    id: uniqid.time(),
    locationName: "",
    parentLocation: "",
  });

  const [depName,setDepartment]=useState({
    id: uniqid.time(),
    departmentName: "",
    parentDepartment: "",
  })
  const [position, setPosition]=useState({
    id: uniqid.time(),
    positionName: "",
    parentDepartment: "",
  })

  const [leavepolicyData,setLeavePolicyData]=useState({
    id:uniqid.time(),
    policyName:"",
    days:"",
    description:"",
    applicableTime:"",
    availability:"",
    date:new Date().toLocaleDateString(),
    status:Boolean(Math.round(Math.random()))
  });

    const[isEditing,setIsEditing]=useState(false);
    const [state,dispatch]=useReducer(combineReducer,initialState);

    return <LocationContext.Provider value={{state,dispatch,locationData,setLocationData,isEditing,setIsEditing,depName,setDepartment,position,setPosition,leavepolicyData,setLeavePolicyData}}>{children}</LocationContext.Provider>
 }

 const useLocation=()=>useContext(LocationContext);
 export {LocationProvider,useLocation};
    