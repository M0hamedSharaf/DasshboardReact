import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { rows } from "./data";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import Header from "../../component/Header";

const Team = () => {
    const theme = useTheme()

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 33, align: "center"
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1, align: "center", headerAlign: 'center'
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1, align: "center", headerAlign: 'center'
        },
        {
            field: 'age',
            headerName: 'Age',
            flex: 1, align: "center", headerAlign: 'center'
        },
        {
            field: 'phone',
            headerName: 'Phone',
            flex: 1, align: "center", headerAlign: 'center'
        },
        {
            field: 'access',
            headerName: 'Access',
            flex: 1, align: "center", headerAlign: 'center',
            renderCell: ({row : {access}}) => {
                return (
                    <Box sx={{
                        p : "5px",
                        width : '99px',
                        borderRadius : '3px',
                        textAlign : "center",
                        display : "flex",
                        justifyContent : "space-evenly",
                        backgroundColor : access === "Admin" 
                                          ? theme.palette.primary.dark 
                                          : access === "Manager"
                                          ? theme.palette.secondary.dark 
                                          :"#3da58a" ,
                    }}>
                        {access === "Admin"  && (<AdminPanelSettingsOutlined fontSize="small"  sx={{color :"#fff"}}/>)}
                        {access === "Manager"  && (<SecurityOutlined fontSize="small"  sx={{color :"#fff"}}/>)}
                        {access === "User"  && (<LockOpenOutlined fontSize="small"  sx={{color :"#fff"}}/>)}
                        <Typography sx={{fontSize : "13px" , color : "#fff"}}>{access}</Typography>
                    </Box>
                )
            }
        },
    ];
    return (
        <Box sx={{ height: 500, width: '98%' ,mx : "auto" }}>
            <Header title={"بيانات الموظفين"} subTitle={"لمعرفه بيانات تفاصيل الموظفين"}/>
            <DataGrid rows={rows}
                // @ts-ignore
                columns={columns} />
        </Box>
    )

};

export default Team

