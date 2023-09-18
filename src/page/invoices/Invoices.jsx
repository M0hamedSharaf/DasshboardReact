import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import { rows,columns } from "./data";

const Invoices = () =>{
    return(
        <Box sx={{ height: 500, width: '98%', mx: "auto" }}>

        <DataGrid
        checkboxSelection
            rows={rows}
            // @ts-ignore
            columns={columns} />
    </Box>
    )
    
};

export default Invoices

