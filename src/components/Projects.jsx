// import React from "react";
// import Container from "@mui/material/Container";
// import { Box, useTheme } from "@mui/material";
// import { CustomTypo } from "./common/CustomTypo";
// import img from "../assets/img.jpeg";
// import { Padding } from "@mui/icons-material";
// import SkillComp from "./skillcomp";
// import nova from "../assets/nova.png";


// const Projects = () => {
//   const theme = useTheme();
//   let Projects=[
//   {
    
//       "title": "Artist Portal",
//       "description": "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
//        "imgUrl":"",
//        "projUrl":'http://',
//        "design":'left',
//       "skills": [
//         "Javascript",
//         "React",
//         "Tailwind CSS",
//         "Ant Design",
//         "Redux",
//         "Vercel"
//       ]   
//   },
//   {
//     "title": "Artist Portal",
//     "description": "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
//      "imgUrl":"",
//      "projUrl":'http://',
//      "design":'right',
//     "skills": [
//       "Javascript",
//       "React",
//       "Tailwind CSS",
//       "Ant Design",
//       "Redux",
//       "Vercel"
//     ]   
//   }
//   ]
//   return (
//     <Container
//       maxWidth="xxl"
//       sx={{
//         backgroundColor: "#0a101a",
//         paddingY: "70px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
          
       
//       }}
//       id="projects"
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignContent: "center",
//           alignItems: "center",
//           width: "100%",
//           borderRadius: "20px",
//           margin: 3,
//         }}
//       >
//         <CustomTypo
//           variant="h6"
//           sx={{
//             backgroundColor: "#374151",
//             textAlign: "center",
//             paddingX: "20px",
//             paddingY: "6px",
//             borderRadius: "20px",
//             marginTop: 2,
//             width: "10em",
//           }}
//           color="white"
//         >
//           Work
//         </CustomTypo>
//         <CustomTypo color="white" sx={{ marginTop: 3, textAlign: "center" }}>
//           Some of the noteworthy projects I have built:
//         </CustomTypo>
// {
//   Projects.map((project,index)=>(
//     <Box
//     key={index}
//     sx={{
//       width: "90%",
//       height: 400,
//       backgroundColor: "#575f69",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       gap:2,
//       marginTop: 3,
//       borderRadius: "20px",
      
//     }}
//   >
//     {project.design === "left" &&
//     (
//       <Box
//       sx={{
//         width: "40%",
//         height: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         alignContent: "center",
        
//       }}
//     >
//       <img
//         src={nova}
//         alt="Profile"
//         style={{
//           width: "90%",
//           height: "70%",
//           borderRadius: "10px",
//           transition: "transform .2s",
//           cursor: "pointer",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = "scale(1.04)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = "scale(1)";
//         }}
//         onClick={() => window.open("https://novasportsleagues.com/", "_blank")}
//       />
//     </Box>
//     )}
 

//     <Box
//       sx={{
//         width: "60%",
//         height:"100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent:'center',
//         paddingX:'50px',
//         gap: 3,
//         borderTopRightRadius:'20px',
//         borderBottomRightRadius:'20px',
//         backgroundColor:'#1f2937',
//       }}
//     >
//       <CustomTypo color="white">Artist Portal</CustomTypo>
//       <CustomTypo color="white" fontWidth={200}>
//         A platform for comparing and finding affordable flights, as well
//         as booking and purchasing tickets safely and easily in a few
//         simple clicks.
//       </CustomTypo>
//       <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
//         <SkillComp title="Javascript" />
//         <SkillComp title="React" />
//         <SkillComp title="Tailwind css" />
//         <SkillComp title="Ant Design" />
//         <SkillComp title="Redux" />
//         <SkillComp title="Vercel" />
//         <SkillComp title="Vercel" />
//       </Box>
//     </Box>
//     {project.design === "right" &&
//     (
//       <Box
//       sx={{
//         width: "40%",
//         height: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         alignContent: "center",
        
//       }}
//     >
//       <img
//         src={nova}
//         alt="Profile"
//         style={{
//           width: "90%",
//           height: "70%",
//           borderRadius: "10px",
//           transition: "transform .2s",
//           cursor: "pointer",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = "scale(1.04)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = "scale(1)";
//         }}
//         onClick={() => window.open("https://novasportsleagues.com/", "_blank")}
//       />
//     </Box>
//     )}
//   </Box>
//   ))
// }
       
        
//       </Box>
//     </Container>
//   );
// };

// export default Projects;

import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, useTheme } from "@mui/material";
import { CustomTypo } from "./common/CustomTypo";
import SkillComp from "./skillcomp";
import nova from "../assets/nova.png";

const Projects = () => {
  const theme = useTheme();
  const projects = [
    {
      title: "Artist Portal",
      description:
        "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
      imgUrl: nova,
      projUrl: "https://novasportsleagues.com/",
      // design: "left",
      skills: ["Javascript", "React", "Tailwind CSS", "Ant Design", "Redux", "Vercel"],
    },
    {
      title: "Another Project",
      description:
        "Another great platform to showcase various features with modern web technologies.",
      imgUrl: nova,
      projUrl: "https://novasportsleagues.com/",
      // design: "right",
      skills: ["Javascript", "React", "Material UI", "Redux", "Node.js"],
    },
  ];

  return (
    <Container
      maxWidth="xxl"
      sx={{
        backgroundColor: "#0a101a",
        paddingY: "70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      id="projects"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          width: "100%",
          borderRadius: "20px",
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

        {projects.map((project, index) => (
          <Grid
            container
            key={index}
            sx={{
              width: "90%",
              height: 400,
              backgroundColor: "#575f69",
              marginTop: 3,
              borderRadius: "20px",
              display: "flex",
            }}
            spacing={2}
            direction={ (index + 1) % 2 === 0 ? "row" : "row-reverse" }

          >
            {/* Image Section */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={project.imgUrl}
                alt={project.title}
                style={{
                  width: "90%",
                  height: "70%",
                  borderRadius: "10px",
                  transition: "transform .2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onClick={() => window.open(project.projUrl, "_blank")}
              />
            </Grid>

            {/* Content Section */}
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingX: "50px",
                gap: 3,
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                backgroundColor: "#1f2937",
              }}
            >
              <CustomTypo color="white">{project.title}</CustomTypo>
              <CustomTypo color="white" fontWidth={200}>
                {project.description}
              </CustomTypo>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {project.skills.map((skill, skillIndex) => (
                  <SkillComp key={skillIndex} title={skill} />
                ))}
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
