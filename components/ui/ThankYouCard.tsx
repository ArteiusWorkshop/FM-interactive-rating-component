import { Box, Chip, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { RatingCard } from "./RatingCard";

export const ThankYouCard = (props: any) => {
  const styleTYC = {
    display: "flex",
    justifyContent: "center",
    pt: "25px",
  };
  return (
    <RatingCard>
      <Box sx={styleTYC}>
        <Image src="/img/illustration-thank-you.svg" width="162" height="108" />
      </Box>
      <Box sx={styleTYC}>
        <Chip
          label={`You selected ${props.alignment} out of 5`}
          sx={{ color: "hsl(25, 97%, 53%)", bgcolor: "#262f38" }}
        />
      </Box>
      <Box sx={styleTYC}>
        <Typography color="white" sx={{ fontSize: "30px", fontWeight: "700" }}>
          Thank You!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Overpass",
          fontSize: "15px",
          textAlign: "center",
        }}
      >
        <Typography>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </Typography>
      </Box>
    </RatingCard>
  );
};
