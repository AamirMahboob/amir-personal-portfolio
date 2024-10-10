import React from "react";
import Container from "@mui/material/Container";
import { Box, Stack, useTheme } from "@mui/material";
import { CustomTypo } from "./common/CustomTypo";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
 
import { Tooltip, Snackbar } from '@mui/material';
import FooterBottom from "./FooterBottom";
const Footer = () => {
    const theme = useTheme()
    const email = "reachsagarshah@gmail.com";
    const handleCopy = () => {
      navigator.clipboard.writeText(email);
      alert("Email copied to clipboard!");
    };
  return (
    <>
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        // backgroundColor:theme.palette.primary.main
        backgroundColor:'black'
      }}
    >
      <Box sx={{ padding: "10px",display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center',width:'50%' }}>
      <CustomTypo variant="h6" sx={{backgroundColor:"#374151",textAlign:'center',paddingX:'20px',paddingY:'6px',borderRadius:'20px'} }   color="white">Get in Touch</CustomTypo>
          
          <Stack spacing={1} marginTop={2} >
          <CustomTypo variant="h5" sx={{textAlign:"center"}}    color="white">
          What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
          </CustomTypo>
          </Stack>
          <Stack marginTop={3} spacing={1}>
          <CustomTypo variant="h5" sx={{textAlign:"center"}}    color="white">
          {email}
          <Tooltip title="Copy Email" arrow>
        <EmailIcon 
          sx={{ fontSize: 40, color: '#333', cursor: 'pointer' }} 
          onClick={handleCopy} 
        />
      </Tooltip>
          </CustomTypo>
          <CustomTypo variant="h5" sx={{textAlign:"center"}}    color="white">
          +91 8980500565
          </CustomTypo>
          </Stack>
          <Stack marginTop={3} spacing={1}>
          <CustomTypo variant="h5" sx={{textAlign:"center"}}    color="white">
            you may also find me on these platform
             
          </CustomTypo>
         <CustomTypo sx={{textAlign:"center", marginTop:'10px'}} >
          <LinkedInIcon sx={{ fontSize: 40, color: '#333' }} />
          <FacebookIcon style={{ fontSize: 40, color: '#1877F2' }} />
          <GitHubIcon style={{ fontSize: 40, color: '#333' }} />
         </CustomTypo>
          </Stack>
          
      </Box>
      
    </Container>
    <FooterBottom />
    </>
  );
};

export default Footer;
