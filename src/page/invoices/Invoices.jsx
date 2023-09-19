import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import { rows, columns } from "./data";
import Header from "../../component/Header";

const Invoices = () => {
    return (
        <Box sx={{ height: 500, width: '98%', mx: "auto" }}>
            <Header title={"الفواتير"} subTitle={"الفواتير وخلبالك من فلوسك لتقع"}/>
            <DataGrid
                checkboxSelection
                rows={rows}
                // @ts-ignore
                columns={columns} />
        </Box>
    )

};

export default Invoices

