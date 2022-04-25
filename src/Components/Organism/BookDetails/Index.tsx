import { Container, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import React, { useState } from "react";
import ButtonGroup from "../../Molecule/ButtonGroups/Index";
import { Time } from "../../Molecule/Reads/Index.stories";
import { TimeIcon } from "../../../Icons";
import BookDetailTab from "../BookDetailTab/Index";

export type bookData = {
  id: number;
  title: string;
  author: string;
  subTitle?: string;
  image: string;
  minute?: string;
  reads?: string;
  status?: {
    isFinished?: boolean;
    isReading?: boolean;
    sendToKindle?: boolean;
  };
};

interface Props {
  AllBookData: bookData;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const useStyles = makeStyles({
  mainHead: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "45px",
    color: "#03314B",
  },
  subHead: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#03314B",
  },
  imageStyle: {
    width: "304px",
    height: "304px",
  },
  author: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#6D787E",
  },
  minute: {
    color: "#6D787E",
    lineHeight: "17.6px",
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "normal",
    textAlign: "left",
  },
  subtitle: {
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "20px",
    lineHeight: "25px",
    color: "#03314B",
  },
});

const LeftContainer = styled("div")({
  boxSizing: "border-box",
  height: "100px",
  display: "flex",
  flexDirection: "column",
  gap: "23px",
});

const RightContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "912px",
  margin: "0 auto",
});

const BookDetail = ({ AllBookData, ...props }: Props) => {
  const classes = useStyles();
  return (
    <>
      <Wrapper>
        <LeftContainer>
          <Typography variant="body2" className={classes.subHead}>
            Get the key ideas from
          </Typography>
          <Typography variant="h1" className={classes.mainHead}>
            {AllBookData.title}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            {AllBookData.subTitle}
          </Typography>
          <Typography variant="body1" className={classes.author}>
            {AllBookData.author}
          </Typography>
          <Typography variant="caption">
            <Time
              startIcon={<TimeIcon />}
              className={classes.minute}
              children={AllBookData.minute}
            ></Time>
          </Typography>
          <Container>
            <ButtonGroup></ButtonGroup>
          </Container>
            <BookDetailTab
              synopsis={
                "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world."
              }
              aboutAuthor={"about the author"}
              whoIsItFor={"who is it for"}
            />
        </LeftContainer>
        <RightContainer>
          <img
            src={AllBookData.image}
            className={classes.imageStyle}
            alt="book cardImg"
          />
        </RightContainer>
      </Wrapper>
    </>
  );
};

export default BookDetail;
