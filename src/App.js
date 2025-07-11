// src/App.js
import React, { useState } from "react";

import {
  Stack,
  Container,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import NavBar from "../src/components/NavBar";
import Menu from "./components/Menu";
import RightBar from "./components/RightBar";
import Add from "./components/Add";
import Content from "./components/Content";
function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Container maxWidth="xl">
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Menu setMode={setMode} mode={mode} />
            <Content />
            <RightBar />
          </Stack>
          <Add />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
