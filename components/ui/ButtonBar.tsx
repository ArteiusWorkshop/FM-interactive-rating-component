import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { RatingCard } from "./RatingCard";
import { ThankYouCard } from "./ThankYouCard";

export const ButtonBar = () => {
  const [showButtons, setShowButtons] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [alignment, setAlignment] = useState(0);
  const [errorVisible, seterrorVisible] = useState("hidden");

  const handleChange = (newAlignment: number) => {
    setAlignment(newAlignment);
    seterrorVisible("hidden");
  };

  const styleRating = {
    "&:focus": {
      background: "hsl(216, 12%, 54%)",
      color: "hsl(0,0%,100%)",
    },
    "&:hover": {
      background: "hsl(25, 97%, 53%)",
      color: "hsl(0,0%,100%)",
    },
    fontSize: 20,
    width: 50,
    height: 50,
    borderRadius: "100% ",
    color: "hsl(217, 12%, 63%)",
    backgroundColor: "#262f38",
  };

  const handleClickSubmit = () => {
    alignment == 0 ? seterrorVisible("visible") : setShowMessage(true);
  };

  return (
    <>
      {showButtons && (
        <RatingCard>
          <Avatar
            sx={{
              backgroundColor: "#262f38",
              width: 45,
              height: 45,
            }}
          >
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                fill="#FC7614"
              />
            </svg>
          </Avatar>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Overpass",
              fontWeight: "700",
              mt: "35px",
              color: "hsl(0,0%,100%)",
            }}
          >
            How did we do?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Overpass",
              fontSize: "15px",
              mt: "10px",
            }}
          >
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mt: "25px",
            }}
          >
            <IconButton onClick={() => handleChange(1)} sx={styleRating}>
              1
            </IconButton>
            <IconButton onClick={() => handleChange(2)} sx={styleRating}>
              2
            </IconButton>
            <IconButton onClick={() => handleChange(3)} sx={styleRating}>
              3
            </IconButton>
            <IconButton onClick={() => handleChange(4)} sx={styleRating}>
              4
            </IconButton>
            <IconButton onClick={() => handleChange(5)} sx={styleRating}>
              5
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "30px",
            }}
          >
            <Button
              sx={{
                backgroundColor: "hsl(25, 97%, 53%)",
                color: "hsl(0, 0%, 100%)",
                borderRadius: "20px",
                width: "100%",
                height: "40px",
                fontFamily: "Overpass",
                fontWeight: "700",
                "&:hover": {
                  backgroundColor: "hsl(0, 0%, 100%)",
                  color: "hsl(25, 97%, 53%)",
                },
              }}
              onClick={handleClickSubmit}
            >
              S U B M I T
            </Button>
          </Box>
          <Typography
            sx={{
              color: "red",
              textAlign: "center",
              visibility: `${errorVisible}`,
            }}
          >
            Please select a rating
          </Typography>
        </RatingCard>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="thanks"
        unmountOnExit
        onEnter={() => setShowButtons(false)}
        onExited={() => setShowButtons(true)}
      >
        <ThankYouCard alignment={alignment} />
      </CSSTransition>
    </>
  );
};
