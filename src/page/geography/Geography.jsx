import { Box, useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import Geog from "./geog";
import Header from "../../component/Header";

const Geography = () => {
    const theme = useTheme()
    return (
      <div>
      <Header title={"خريطة العالم"} subTitle={"شوف شركاتك الكثيره حولين العالم يا عم الدكتور المهم"}/>
      <Geog/>
      </div>
    )

};

export default Geography

