import{ styled , Select, Accordion } from "@mui/material";

export const BorderlessSelect = styled(Select)(({ theme }) => ({
    '.MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  }));
export const BorderlessSelectShow = styled(Select)(({ theme }) => ({
    '.MuiOutlinedInput-notchedOutline': {
      border: "1px solid #e4e4e4",
    },
    // MuiSelect-select
    //  MuiSelect-outlined
    //   MuiSelect-multiple
    //    MuiInputBase-input 
    //    MuiOutlinedInput-input
        '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':{
          padding:"5px 10px 5px 10px"
        },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: "1px solid #e4e4e4",
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      Padding:"0px"
    },
    "&.Mui-expanded":{
      margin: "0px 0 !important",
    },
  }));

  export const CustomAccordion = styled(Accordion)(({ theme }) => {
    return {
      filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))", 
      boxShadow:"none",
      // this styles directly apply to accordion
      ".MuiAccordionDetails-root": {
        // backgroundColor:"#f7f5f5",
        
      },
      
  
      

      // ".MuiAccordionSummary-root": {
      //   height: "30px",
      //   minHeight: "30px !important",
      //   backgroundColor: "black",
      //   color: "white",
      //   margin: "0px 0 !important",
      //   padding:"0 9px !important",
      //   fontSize:"16px",
      // }, // this apply to Summary
      "&.Mui-expanded":{
        margin: "5px 0 !important",
      },
     
   
    };
  });