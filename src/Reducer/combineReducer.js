export const combineReducer = (state,action) => {
    switch (action.type) {
        case "ADD_LOCATION":
            return {...state,locationList:[...state.locationList,action.payload]};

        case "UPDATE_LOCATION":
            return {...state,locationList:[...state.locationList.map(location=>location.id===action.payload.id? action.payload:location)]}; 
            
         case "DELETE_DATA":
            return {...state,locationList:[...state.locationList.filter(location=>location.id !==action.payload.id)]}; 
            
         case "SEARCH_BY_QUERY":
           return {...state,searchByQuery:action.payload}
   
        case "ADD_DEPARTMENT":
            return {...state,departmentList:[...state.departmentList,action.payload]};   
    
        case "UPDATE_DEPARTMENTDATA":
             return {...state,departmentList:[...state.departmentList.map(department=>department.id===action.payload.id? action.payload:department)]}; 
        
           case  "DELETE_DEPARTMENT":
             return {...state,departmentList:[...state.departmentList.filter(department=>department.id !==action.payload.id)]}; 
            

        case "ADD_POSITION":
            return {...state,positionList:[...state.positionList,action.payload]};  
             
         case "UPDATE_POSITION":
             return {...state,positionList:[...state.positionList.map(position=>position.id===action.payload.id? action.payload:position)]}; 
        
           case  "DELETE_POSITION":
             return {...state,positionList:[...state.positionList.filter(position=>position.id !==action.payload.id)]};    
            
        case "ADD_LEAVEPOLICY":
        return  {
            ...state,leaveData:[...state.leaveData,action.payload]
          }
          
          case "DELETE_POLICY":
             return {...state,leaveData:[...state.leaveData.filter(policy=>policy.id !==action.payload.id)]};    
  
  case "UPDATE_LEAVEPOLICY":
     return {...state,leaveData:[...state.leaveData.map(policy=>policy.id===action.payload.id? action.payload:policy)]}; 

             default:
           return state;
    }
  
}


