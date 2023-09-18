import React from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Typography } from "@mui/material";
import { rows, columns } from "./data";



const Contact = () => {
    return (
        <Box sx={{ height: 500, width: '98%', mx: "auto" }}>

            <DataGrid
                slots={{
                    toolbar: GridToolbar,
                }}
                rows={rows}
                // @ts-ignore
                columns={columns} />
        </Box>
    )

};


export default Contact

