import { Box, Menu } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box bg="black" color="#FFFFFF" padding={3}>
      <span>Logo</span>
      <Box float="right">
        <Link to="/">Home </Link>
        <Link to="/about">About</Link>
      </Box>
    </Box>
  );
};

export default Navbar;
