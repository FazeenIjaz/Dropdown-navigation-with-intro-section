import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DesktopImg from "../assets/image-hero-desktop.png";
import MobileImg from "../assets/image-hero-mobile.png";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import audioPhile from "../assets/client-audiophile.svg";
import dataBiz from "../assets/client-databiz.svg";
import Maker from "../assets/client-maker.svg";
import Meet from "../assets/client-meet.svg";

const Main = () => {
  const isMobile = useMediaQuery("(max-width:840px)");

  return (
    <Container maxWidth="lg" sx={{ marginTop: "70px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
        }}
      >
        {/* ============== text =================== */}
      
        <Box sx={{ marginTop: "60px", width: isMobile ? "100%" : "60%" }}>
          <Typography
            variant="h1"
            color="initial"
            fontSize={isMobile ? "30px" : "90px"}
            fontWeight={isMobile ? "Bold" : "Light"}
            lineHeight={"1"}
          >
            Make {!isMobile && <br />}
            Remote Work
          </Typography>
          <Typography
            variant="p"
            fontSize={"18px"}
            lineHeight={"1.6"}
            sx={{
              width: isMobile ? "100%" : "70%",
              display: "inline-block",
              mt: isMobile ? "20px" : "50px",
              color: "hsl(0, 0%, 41%)",
              fontFamily: "Epilogue",
            }}
          >
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </Typography>

          <Button
            variant="contained"
            sx={{
              display: "block",
              borderRadius: "10px",
              m: isMobile ? "30px auto" : "50px 0",
            }}
          >
            Learn More
          </Button>
          <Stack
            direction="row"
            spacing={2}
            mt={"70px"}
            m
            sx={{ m: isMobile ? "auto" : "0px" }}
          >
            <img
              src={audioPhile}
              alt="audioPhile"
              style={{ width: isMobile ? "67px" : "auto" }}
            />
            <img
              src={dataBiz}
              alt="dataBiz"
              style={{ width: isMobile ? "67px" : "auto" }}
            />
            <img
              src={Maker}
              alt="Maker"
              style={{ width: isMobile ? "67px" : "auto" }}
            />
            <img
              src={Meet}
              alt="Meet"
              style={{ width: isMobile ? "67px" : "auto" }}
            />
          </Stack>
        </Box>

                {/* ============== Image =================== */}

        <Box sx={{ width: isMobile ? "100%" : "40%" }}>
          <img
            src={DesktopImg}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              display: !isMobile ? "block" : "none",
            }}
          />
          <img
            src={MobileImg}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              display: isMobile ? "block" : "none",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Main;
