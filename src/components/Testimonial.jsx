import React from "react";
import Container from "@mui/material/Container";
import { Box, useTheme } from "@mui/material";
import { CustomTypo } from "./common/CustomTypo";
import img from "../assets/img.jpeg";
import { Padding } from "@mui/icons-material";
const Testimonial = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="xxl"
      sx={{
        backgroundColor: "red",
         padding:'10px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        
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
          Get in Touch
        </CustomTypo>
        <CustomTypo sx={{ marginTop: 1, textAlign: "center" }}>
          Nice things people have said about me:
        </CustomTypo>
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 3,
        gap: 4,
      }}>
        
       
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            marginTop: 3,
            border:'1px solid black',
            paddingY:"40px",
            borderRadius: "10px",

        }}>
          <img
            src={img}
            alt=""
            width={80}
            height={80}
            style={{ borderRadius: "100%" }}

          />
          <CustomTypo variant="h5" sx={{ marginTop: 2, marginBottom: 2,textAlign:'center' }}>
            "Job well done! I am really impressed. He is very very good at what
            he does:) I would recommend Sagar and will rehire in the future for
            Frontend development."
          </CustomTypo>
          <CustomTypo variant="h6" sx={{ marginTop: 1, marginBottom: 2 }}>
          Krisztian Gyuris
          </CustomTypo>
          <CustomTypo variant="h6" sx={{ marginTop: 1, marginBottom: 2 }}>
            Frontend Developer
          </CustomTypo>
        </Box>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            marginTop: 3,
            border:'1px solid black',
            paddingY:"40px",
            borderRadius: "10px",
            backgroundColor:'#1f2937',
            boxShadow:theme.shadows[4]
        }}>
          <img
            src={img}
            alt=""
            width={80}
            height={80}
            style={{ borderRadius: "100%" }}
            
          />
          <CustomTypo color="white" variant="h5" sx={{ marginTop: 2, marginBottom: 2,textAlign:'center' }}>
            "Job well done! I am really impressed. He is very very good at what
            he does:) I would recommend Sagar and will rehire in the future for
            Frontend development."
          </CustomTypo>
          <CustomTypo color="white" variant="h6" sx={{ marginTop: 1, marginBottom: 2 }}>
          Krisztian Gyuris
          </CustomTypo>
          <CustomTypo color="white" variant="h6" sx={{ marginTop: 1, marginBottom: 2 }}>
            Frontend Developer
          </CustomTypo>
        </Box>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            marginTop: 3,
            border:'1px solid black',
            paddingY:"40px",
            borderRadius: "10px",


        }}>
          <img
            src={img}
            alt=""
            width={80}
            height={80}
            style={{ borderRadius: "100%" }}

          />
          <CustomTypo variant="h5" sx={{ marginTop: 2, marginBottom: 2,textAlign:'center' }}>
            "Job well done! I am really impressed. He is very very good at what
            he does:) I would recommend Sagar and will rehire in the future for
            Frontend development."
          </CustomTypo>
          <CustomTypo variant="h6" sx={{ marginTop: 1, marginBottom: 2 }}>
          Krisztian Gyuris
          </CustomTypo>
          <CustomTypo variant="h6" sx={{ marginTop: 1, marginBottom: 2 }}>
            Frontend Developer
          </CustomTypo>
        </Box>
      </Box>
    </Container>
  );
};

export default Testimonial;
