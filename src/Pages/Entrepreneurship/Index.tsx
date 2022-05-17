import { Box } from "@mui/material";
import React from "react";
import Banner from "../../Components/Molecule/Banner/Index";
import SearchBar from "../../Components/Organism/SearchBar/Index";
import Footer from "../../Components/Organism/Footer/Index";
import Header from "../../Components/Organism/Header/Index";
import Entrepreneurship from "../../Components/Templates/Entrepreneurship/Index";

const EntrePage = () => {
  return (
    <Box>
      <Entrepreneurship
        header={<Header />}
        footer={<Footer />}
        banner={<Banner />}
        searchBar={<SearchBar />}
      />
    </Box>
  );
};

export default EntrePage;
