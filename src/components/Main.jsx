import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Main = (props) => {
  return (
    <div>
      <Navbar />
      <Box margin={2}>{props.children}</Box>
    </div>
  );
};
export default Main;
