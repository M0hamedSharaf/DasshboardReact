import { useTheme } from "@emotion/react";
import { Theme } from "@fullcalendar/core/internal";
import { Box, Typography } from "@mui/material";
import React from "react";

const NotFound = () =>{
    const theme = useTheme()
    return(
  <Box>
    <Typography   color={theme.palette.error.main}  align="center">
        There is no design yet
        <br />
        <br />
        Please try again later..
    </Typography>
  </Box>
    )
    
};

export default NotFound

