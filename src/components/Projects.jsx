import React from "react";
import Container from "@mui/material/Container";
import { Box, useTheme } from "@mui/material";
import { CustomTypo } from "./common/CustomTypo";
import img from "../assets/img.jpeg";
import { Padding } from "@mui/icons-material";
import SkillComp from "./skillcomp";
const Projects = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="xxl"
      sx={{
        backgroundColor: "#0a101a",
         paddingY:'70px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border:'1px solid white'
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          width: "100%",
          margin: 3,
        }}
      >
        <CustomTypo
          variant="h6"
          sx={{
            backgroundColor: "#374151",
            textAlign: "center",
            paddingX: "20px",
            paddingY: "6px",
            borderRadius: "20px",
            marginTop: 2,
            width: "10em",
          }}
          color="white"
        >
          Work
        </CustomTypo>
        <CustomTypo color="white" sx={{ marginTop: 3, textAlign: "center" }}>
        Some of the noteworthy projects I have built:
        </CustomTypo>

        <Box>
            <Box sx={{width:'100%',backgroundColor:'#111827',padding:10}}>
                 <Box>

                 </Box>
                 <Box>
                    <CustomTypo>Artist Portal</CustomTypo>
                    <CustomTypo>A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.</CustomTypo>
                     <Box sx={{display:'flex',gap:2}}>
                     <SkillComp title = "Javascript" />
                     <SkillComp title = "React"/>
                     <SkillComp  title = "Tailwind css"/>
                     <SkillComp title = "Ant Design"/>
                     <SkillComp title = "Redux"/>
                     <SkillComp title = "Vercel"/>
                     </Box>
                     
                 </Box>
            </Box>
        </Box>
      </Box>
       
    </Container>
  );
};

export default Projects;
