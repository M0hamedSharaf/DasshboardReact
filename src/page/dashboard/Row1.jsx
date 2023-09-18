import { Stack } from "@mui/material";
import React from "react";
import Card from "./card";

import { EmailOutlined } from "@mui/icons-material";
import { PointOfSaleOutlined } from "@mui/icons-material";
import { PersonAddOutlined } from "@mui/icons-material";
import { TrafficOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { data1 ,data2 , data3 , data4 } from "./data";


const Row1 = () => {
    const theme = useTheme()
    return (
        <Stack
            direction={"row"}
            flexWrap={"wrap"}
            gap={1}
            justifyContent={{ xs: "center", sm: "space-between" }}
        >

            <Card
                icon={<EmailOutlined sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
                title={"15,400"}
                subTitle={"Emails Sent"}
                increase={"+14%"}
                data={data1} 
                scheme={"dark2"} />
            <Card
                icon={<PointOfSaleOutlined sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
                title={"679,123"}
                subTitle={"Sales obtained"}
                increase={"+21%"}
                data={data2} 
                scheme={"nivo"} />
            <Card
                icon={<PersonAddOutlined sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
                title={"15,400"}
                subTitle={"Emails Sent"}
                increase={"+14%"}
                data={data3} 
                scheme={"paired"} />
            <Card
                icon={<TrafficOutlined sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
                title={"15,400"}
                subTitle={"Emails Sent"}
                increase={"+14%"}
                data={data4} 
                scheme={"set3"} />
           

        </Stack>
    )
};

export default Row1