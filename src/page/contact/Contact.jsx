import React from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Typography } from "@mui/material";
import { rows, columns } from "./data";
import Header from "../../component/Header";



const Contact = () => {
    return (
        <Box sx={{ height: 500, width: '98%', mx: "auto" }}>
            <Header title={"بيانات الموظفين"} subTitle={"إلقت نظره على البيانات يا مهم"}/>
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

