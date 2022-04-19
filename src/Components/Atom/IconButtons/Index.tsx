import React from 'react'
import {Typography} from "@mui/material";
import Props from "../../Interfaces/PropInterface";

const IconButtons = ({color, children, startIcon, endIcon, typography} : Props) => {
    return(
        <>
        <div data-testid="startIcon">{startIcon}</div>
			<Typography
				variant={typography}
				sx={{ position: "relative", color: `${color}.main` }}
			>
				{children}
			</Typography>
			<div data-testid="endIcon">{endIcon}</div>
        </>
    )
};

export default IconButtons;