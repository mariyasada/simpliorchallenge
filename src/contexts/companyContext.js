import { createContext,useContext ,useState  } from "react";
import toast from "react-hot-toast";


 const CompanyContext = createContext();
 const comData=JSON.parse(localStorage.getItem("company_data"));

 const CompanyProvider =({children})=>{
     const [companiesData,setCompaniesData]=useState({data:comData});
     

     const storeData=(cData)=>{
        if(cData.companyName==="" ||cData.DBA==="" || cData.state==="" || cData.country===""|| cData.city==="" || cData.zipcode==="" || cData.line1===""|| cData.line2==="")
        {
            toast("please fill all the fileds",{icon:"✔"});}
            else if(cData.zipcode.length<6 || cData.zipcode.length>6)
            {
                toast("enter valid zipcode",{icon:"✔"})
            }
            
        else{
            localStorage.setItem("company_data",JSON.stringify(cData))
            setCompaniesData({data:cData});
            }
        }


        
      
   
    
     return <CompanyContext.Provider value={{companiesData,setCompaniesData,storeData}}>{children}</CompanyContext.Provider>
 }
 const useCompany =()=>useContext(CompanyContext);

 export {useCompany,CompanyProvider};