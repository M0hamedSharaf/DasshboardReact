import { Box, useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import Geog from "./geog";

const Geography = () => {
    const theme = useTheme()
    return (
      <Geog/>
    )

};

export default Geography

