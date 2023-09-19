import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import Header from "../../component/Header";

const Dashboard = () => {
    const theme = useTheme()
    return (
        <div>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                <Header title={"لوحة تحكم "} subTitle={"القة نظره على شركاتك يا عم المهم"} />
                <Box sx={{ textAlign: "right", mb: 1.3 }}>
                    <Button sx={{ padding: "6px 8px", textTransform: "capitalize" }} variant="contained" color="primary">
                        <DownloadOutlined />
                        Downoad Reports
                    </Button>
                </Box>
            </Stack>
            <Row1 />
            <Row2 />
            <Row3 />
        </div>
    )
};

export default Dashboard

