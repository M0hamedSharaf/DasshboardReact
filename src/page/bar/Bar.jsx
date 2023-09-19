
import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import React from "react";
import Bat from "./bat";
import Header from "../../component/Header";




const Bar = () => {
    const theme = useTheme()
    return (
     <div>
       <Header title={"شريط الرسم البياني"} subTitle={"القة نظره على البار يا عم المهم"}/>
       <Bat/> 
     </div>
    )

};

export default Bar

