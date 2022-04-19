import React from "react";
import { Button, Typography } from "@mui/material";
import Props from "../../Interfaces/PropInterface";


const Buttons = (props: Props) => {
  const { startIcon,typography, typoColor, endIcon, variant, children } = props;
  return (
    <Typography>
      <Button
        variant={variant}
        startIcon={startIcon}
        endIcon={endIcon}
        sx={{ backgroundColor: "#2CE080", color: "black" }}
      >
        {children}
      </Button>
    </Typography>
  );
};

export default Buttons;
