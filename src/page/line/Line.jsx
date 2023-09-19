import { ResponsiveCalendar } from "@nivo/calendar";
import React from "react";
import {data} from "./data"
import { Box, useTheme } from "@mui/material";
import Header from "../../component/Header";

const Line = () =>{
    const theme = useTheme()
    return(
        <Box sx={{height:"100vh"}}>
            <Header title={"اعمالي"} subTitle={"الضغوطات خلال فتره عملي اثناء اداره الشركات"}/>
          <ResponsiveCalendar
        data={data}
        theme={
            {
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                },
                "axis": {
                    "domain": {
                        "line": {
                            "stroke": theme.palette.secondary.light,
                            "strokeWidth": 1
                        }
                    },
                    "legend": {
                        "text": {
                            "fontSize": 12,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    },
                    "ticks": {
                        "line": {
                            "stroke": theme.palette.secondary.light,
                            "strokeWidth": 1
                        },
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    }
                },
                "grid": {
                    "line": {
                        "stroke": theme.palette.secondary.light,
                        "strokeWidth": 1
                    }
                },
                "legends": {
                    "title": {
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    },
                    "text": {
                        "fontSize": 11,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    },
                    "ticks": {
                        "line": {},
                        "text": {
                            "fontSize": 10,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    }
                },
                "annotations": {
                    "text": {
                        "fontSize": 13,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "link": {
                        "stroke": "#000000",
                        "strokeWidth": 1,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "outline": {
                        "stroke": "#000000",
                        "strokeWidth": 2,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "symbol": {
                        "fill": "#000000",
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    }
                },
                "tooltip": {
                    "container": {
                        "background": theme.palette.background.default,
                        "color": theme.palette.text.primary,
                        "fontSize": 12
                    },
                    "basic": {},
                    "chip": {},
                    "table": {},
                    "tableCell": {},
                    "tableCellValue": {}
                }
            }
        }
        from="2015-03-01"
        to="2016-07-12"
        align="top"
        emptyColor="#519BB2"
        colors={[ '#61cdbb', '#2D657F', '#5FA8D3', '#2D657F' ]}
        minValue={-300}
        maxValue={99}
        margin={{ top: 90, right: 40, bottom: 20, left: 20 }}
        monthBorderColor= "3f8098" 
        monthLegendOffset={12}
        dayBorderColor={theme.palette.text.primary}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
        </Box>
    )
    
};

export default Line

