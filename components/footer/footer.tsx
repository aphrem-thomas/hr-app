import { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";

function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: { md: "20px" },
        }}
      >
        <Box
        bgcolor={"info.light"}
        sx={{
            "height":{md:"200px"}
        }}
        padding={"20px"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        >
          <Box
            sx={{
              display: "flex",
              "flex-direction": { md: "row" },
              "justify-content":{md:"center"}
            }}
            maxWidth={"xl"}
          >
            <Box width={"100%"} sx={{
                "display":"flex",
                "flex-direction":{xs:"column", md:"row"},
                "justifyContent":{md:"space-between"}
            }}>
            <Box>
              <Typography sx={{ "font-weight": "500" }}>
                Helpful Resources
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  "margin-top": "10px",
                  "margin-bottom": "10px",
                  fontSize: "14px",
                }}
              >
                <a
                  target="_blank"
                  href="https://www.facebook.com/ranjithmathew.ca"
                >
                  About us
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/ranjithmathew.ca"
                >
                  Terms and conditions
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/ranjithmathew.ca"
                >
                  Privacy policy
                </a>
              </Box>
            </Box>
            <Box className="reach-us">
              <Typography sx={{ "font-weight": "500" }}>Reach us</Typography>
              <Box
                sx={{
                  display: "flex",
                  "margin-top": "10px",
                  "margin-bottom": "10px",
                }}
              >
                <a
                  target="_blank"
                  href="https://www.facebook.com/ranjithmathew.ca"
                >
                  <img className="h-8 ml-2" src="/icons/facebook.png"></img>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ranjithmathew/"
                >
                  <img className="h-8 ml-2" src="/icons/linkedin.png"></img>
                </a>
                <a target="_blank" href="https://twitter.com/mathew_ranjith">
                  <img className="h-8 ml-2" src="/icons/twitter.png"></img>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@ranjithmathew.canada"
                >
                  <img className="h-8 ml-2" src="/icons/youtube.png"></img>
                </a>
              </Box>
              <Typography sx={{ "font-size": "12px" }}>
                contact@savahr.com
              </Typography>
            </Box>
            </Box>  
          </Box>
          <Divider />
          <Box sx={
            { 
                height:"100%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }
          }>
            <Typography sx={{ fontSize: "10px" }} textAlign={"center"}>
              2025 sava HR All rights reserved
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
