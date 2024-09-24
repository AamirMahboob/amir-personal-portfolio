import { Box, Container, Stack, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import theme from "../theme/theme";
import { CustomTypo } from "./common/CustomTypo";

const Hero = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "70vh",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
          width: '100%'
      }}
    >
      <Grid container     spacing={5}   >
        <Grid size={6} >
          <Stack spacing={2}>
            <CustomTypo variant="h1" fontWidth={500} color="white">
              Hi, I'm Aamir 👋
            </CustomTypo>
            <CustomTypo variant="h5" fontWidth={500} color="white">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </CustomTypo>
            <CustomTypo variant="h5" fontWidth={500} color="white">
              Ahmedabad, India
            </CustomTypo>
            <CustomTypo variant="h5" fontWidth={500} color="white">
              Available for new projects
            </CustomTypo>
          </Stack>
        </Grid>
        <Grid size={6}>
          <CustomTypo variant="h1" fontWidth={500} color="white">
            Hi, I'm Aamir 👋
          </CustomTypo>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;

{
  /* <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{display:'flex',flexDirection:'column'}} >
          <CustomTypo 
            variant="h3"
            fontWidth={500}
            color="white"
          >
            Hi, I'm Aamir 👋
          </CustomTypo>
        </Box>
        <Box>sdfkjs</Box>
      </Box> */
}
