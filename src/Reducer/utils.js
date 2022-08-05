export const getsortedLocation=(locationList,state)=>{
  if(state.searchByQuery)
  {
    return locationList.filter((location)=>(location.locationName.toLowerCase().includes(state.searchByQuery.toLowerCase()) || location.parentLocation.toLowerCase().includes(state.searchByQuery.toLowerCase())))
    }
    else return locationList;
  
}
export const getsortedDepartment=(List,state)=>{
  if(state.searchByQuery)
  {
    return List.filter((department)=>(department.departmentName.toLowerCase().includes(state.searchByQuery.toLowerCase() || department.parentDepartment.toLowerCase().includes(state.searchByQuery.toLowerCase()))))
    }
    else return List;
  
}
export const getsortedByPosition=(List,state)=>{

  if(state.searchByQuery)
  {
    return List.filter((position)=>(position.positionName.toLowerCase().includes(state.searchByQuery.toLowerCase()  || position.parentDepartment.toLowerCase().includes(state.searchByQuery.toLowerCase()))))
    }
    else return List;
  
}
export const getsortedByPolicy=(List,state)=>{
  if(state.searchByQuery)
  {
    return List.filter((policy)=>(
      policy.policyName.toLowerCase().includes(state.searchByQuery.toLowerCase())))
    }
    else return List;
}
