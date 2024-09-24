import { styled, Typography } from "@mui/material";

export const CustomTypo = styled(Typography)(({ theme, fontWidth }) => ({
  fontWeight: fontWidth ? fontWidth : "600",
  fontSize: "62px",
  
  // color: "#333333",
}));
