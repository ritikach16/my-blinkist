import React from 'react'
import {ReactComponent as ExpandIcon } from "../../../../public/Images/Svg/downarrow.svg";
import {ReactComponent as Account } from "../../../../public/Images/Svg/account.svg";
import { makeStyles } from '@mui/styles';
import {Box} from "@mui/material";
import Icons from '../../Atom/Icons/Index';
import TypographyComponent from '../../Atom/Typography/Index';


interface Props{
    title: string;
    className ?: string;
    style ?: React.CSSProperties;
    onClick ?: () => void;
}

const useStyles = makeStyles({
    main: {
        display: "flex",
        flexDirection: "row",
        height: "24px",
        cursor: "pointer",
    },
    typography: {
        alignSelf: "center",
        fontFamily: "Cera Pro",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "20px",
        color: "#03314B"
    }
})

const Dropdown = (props:Props) => {
    const classes = useStyles();
    return(
        <>
        <Box className={classes.main}>
            {props.title === "Account" ? (
                <Icons>
                    <Account width="40px" height="40px"/>
                </Icons>
            ): (
                <TypographyComponent variant='body1' className={classes.typography}>
                    {props.title}
                </TypographyComponent>
            )}

            <Icons onClick={props.onClick} style={props.style}>
                <ExpandIcon/>
            </Icons>
        </Box>
        </>
    );
};

export default Dropdown;
