import { NavLink } from "react-router-dom";
import RoutePaths from "../../routes/RoutePaths";
import { Button, useColorMode, Box, Flex } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import LanguageSwitch from "./LanguageSwitch";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      boxShadow="md"
      p={3}
      bg="#364150"
      bgGradient={
        colorMode === "light"
          ? "linear(to-r, brand.50, brand.300)"
          : "linear(to-r, brand.500, brand.600)"
      }
      borderRadius={45}
      width="fit-content"
      maxWidth="1200px"
      mx="auto"
      mb={4}
      alignContent="center"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={1}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection={["column", "row"]} 
        px={[2, 6]}
        gap={[4, 8]} 
      >
        <Flex
          as="nav"
          gap={[4, 8]} 
          alignItems="center"
          flexDirection={["row", "row"]} 
        >
          <NavLink to={RoutePaths.Home}>
            <FaHome size={25} /> 
          </NavLink>

          <NavLink to={RoutePaths.About}>
            <FaUser size={25} />
          </NavLink>

          <NavLink to={RoutePaths.Projects}>
            <FaCode size={25} />
          </NavLink>

          <NavLink to={RoutePaths.Contact}>
            <FaEnvelope size={25} />
          </NavLink>
        </Flex>

        <Flex
          gap={[2, 4]} 
          alignItems="center"
          flexDirection={["row", "row"]} 
        >
          <LanguageSwitch />
          <Button
            onClick={toggleColorMode}
            bg="transparent"
            color="brand.100"
            size={["sm", "md"]} 
          >
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;