import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link to="/license">License module</Link>
      <Link to="/passport">Passport module </Link>
      <Link to="/carsummary">CAR summary </Link>
      <Link to="/insurance">Insurance</Link>
    </Box>
  );
};

export default Home;
