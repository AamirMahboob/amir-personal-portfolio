import { Box, Container, Stack, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import theme from "../theme/theme";
import { CustomTypo } from "./common/CustomTypo";
import img from "../assets/img.jpeg";
import { Typewriter } from 'react-simple-typewriter';
import '../index.css'
const Hero = () => {
  const theme = useTheme();
  return (
    <Container
    maxWidth="xxl"
      sx={{
        height: "70vh",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
      }}
      id="hero"
    >
      <Box
       sx={{
        [theme.breakpoints.up('md')]: {
           marginX:'100px'
        },


      }}
      >
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, sm: 12 , md:8 }}   >
          <Stack spacing={2}>
            <CustomTypo variant="h1" fontWidth={500} color="white">
                <Typewriter
              words={["Hi, I'm Aamir 👋"]}
              loop={0} // Set to `0` for infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            </CustomTypo>
            <CustomTypo variant="h5" fontWidth={500} color="white">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 2 years, I still love it as if it was something new.
            </CustomTypo>
            <CustomTypo variant="h5" fontWidth={500} color="white">
              Islamabad, Pakistan
            </CustomTypo>
            <CustomTypo variant="h5" fontWidth={500} color="white">
              Available for new projects
            </CustomTypo>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 12 , md:4 }} >
          
          <Box sx={{ position: "relative", width: "100%" }}>
 
  <Box
    sx={{
      position: "relative",
      backgroundColor: "white",
      width: "300px",
      height: "300px",
      border: "10px solid black",
      zIndex: 2,  // Ensure the image is on top
      animation: "borderAnimation 3s infinite linear",
    }}
  >
    <img
      src={img}
      alt="Profile"
      style={{ width: "100%", height: "100%", }}
    />
  </Box>

  {/* Border Box */}
  <Box
    sx={{
      position: "absolute",
      top: 40,
      left: 40,
      width: "300px",
      height: "300px",
      backgroundColor: "#374151",
      border: "5px solid #374151",  // The black border
      zIndex: 1,  // This should be behind the image
    }}
  ></Box>
</Box>

      </Grid>
      </Grid>
      </Box>
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
