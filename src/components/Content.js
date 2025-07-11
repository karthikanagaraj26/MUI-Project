import { Box } from "@mui/material";
import React from "react";
import Tourcard from "./Tourcard.js";

const Content = () => {
  return (
    <Box flex={3} padding={3} sx={{ display: { xs: "none", sm: "block" } }}>
      <Tourcard />
    </Box>
  );
};

export default Content;