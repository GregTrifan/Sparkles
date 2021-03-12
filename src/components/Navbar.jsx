import {
  Box,
  Menu,
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  DarkMode
} from "@chakra-ui/react";
import { CgMenu } from "react-icons/cg";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <DarkMode>
      <Box bg="black" color="#FFFFFF" padding={6}>
        <Menu>
          <MenuButton
            border="1px"
            _hover={{ bg: "#121212" }}
            bg="black"
            as={Button}
          >
            <CgMenu />
          </MenuButton>
          <MenuList>
            <MenuItem to="/">Download</MenuItem>
            <MenuItem to="/about">Create a Copy</MenuItem>
            <MenuItem onClick={toggleColorMode}>
              {colorMode === "light" ? "Go Dark 🌙" : "Go Light 🌞"}
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </DarkMode>
  );
};

export default Navbar;
