import { useTheme } from "@emotion/react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { transactions } from "./data";

const Row2 = () => {
  const theme = useTheme()
  return (
    <Stack >
      <Box sx={{ overflow: "auto", maxHeight: 350, mt: 2, }}>
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>

        {transactions.map((item) => {
          return (
            <Paper sx={{
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
            >
              <Box p={1.2}>
                <Typography variant="body1" fontWeight="600">
                  test
                </Typography>
                <Typography variant="body2">
                  test1
                </Typography>
              </Box>
              <Typography variant="body1"> </Typography>
              test3
              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                variant="body2"
              >
                567$
              </Typography>
            </Paper>
          )
        })}
      </Box>
    </Stack>
  )
};

export default Row2