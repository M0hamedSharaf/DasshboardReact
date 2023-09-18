import { Box, Paper, Stack, Typography } from "@mui/material";
import Pie2 from "../../page/pie/pie2";
import React from "react";
import { useTheme } from "@emotion/react";
import Bat from "../../page/bar/bat";
import Geog from "../../page/geography/geog";

const Row3 = () => {
    const theme = useTheme()
    return (
        <Stack gap={1.2} direction={"row"} mt={2} flexWrap={"wrap"}>
          <Paper sx={{minWidth:"300px",width:"28%" , flexGrow:1 }}>
            <Typography 
            color={theme.palette.secondary.main}
            sx={{padding:"30px 30px 0 30px"}}
            variant="h6"
            fontWeight="600"
            >
            Campaing
            </Typography>
            
            <Pie2 isDashbord={true} />

            <Typography 
                align="center"
                sx={{mt:"15px"}}
                variant="h6"
            >
               $50.389 revenue generted
            </Typography>
            <Typography 
                align="center"
                px={0.7}
                pb={3}
                variant="body2"
            >
              Includes extra misc expenditures and costs
            </Typography>
          </Paper>

          <Paper sx={{minWidth:"300px",width:"33%" , flexGrow:1 }}>
            <Typography 
            color={theme.palette.secondary.main}
            sx={{padding:"30px 30px 0 30px"}}
            variant="h6"
            fontWeight="600"
            >
            Sales Quantity
            </Typography>
            <Bat isDashbord={true}/>
          </Paper>

          <Paper sx={{minWidth:"300px",width:"33%" , flexGrow:1 }}>
          <Geog isDashbord={true}/>
          </Paper>
        </Stack>
    )
};

export default Row3