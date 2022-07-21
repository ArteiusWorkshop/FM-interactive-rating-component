import { Card, CardContent } from "@mui/material";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}
export const RatingCard: FC<Props> = ({ children }) => {
  return (
    <>
      <Card
        sx={{
          width: "410px",
          height: "410px",
          borderRadius: "30px",
          backgroundColor: "#171e28",
        }}
      >
        <CardContent sx={{ m: "15px", color: "hsl(217, 12%, 63%)" }}>
          {children}
        </CardContent>
      </Card>
    </>
  );
};
