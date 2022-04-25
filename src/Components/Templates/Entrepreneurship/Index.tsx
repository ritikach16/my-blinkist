import { Box, Typography } from "@mui/material";
import bookData from "../../../AllData/BooksData";
import React, { useEffect, useState } from "react";

const Entrepreneurship = () => {
    const [displayBookDetails, setDisplayBookDetails] = useState(bookData);

    // useEffect(() => {
    //   if (bookData.type.trending) {
    //     setDisplayBookDetails(
    //       displayBookDetails.filter((books) => books.type.trending)
    //     );
    //   } else {
    //     if (bookData.type.featured) {
    //       setDisplayBookDetails(
    //         displayBookDetails.filter((books) => books.type.featured)
    //       );
    //     } else {
    //       setDisplayBookDetails(
    //         displayBookDetails.filter((books) => books.type.justAdded)
    //       );
    //     }
    //   }
    // }, [displayBookDetails, bookData.type]);
  return (
    <Box>
      <Box>
        <Typography>Trending blinks</Typography>

      </Box>
    </Box>
  );
};

export default Entrepreneurship;
