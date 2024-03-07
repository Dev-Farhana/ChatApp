import React, { useEffect } from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/Login";
import SignupForm from "../components/SignupForm";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("userInfo"));
  //    if (user) {
  //     navigate("/chats");
  //   }
  // }, [navigate]);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      if (user) {
        navigate("/chats");
      }
    } catch (error) {
      console.error("Error parsing user information:", error);
    }
  }, [navigate]);



  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="2px"
      >
        <Text fontSize="2xl" textAlign="center">
          Converstions End-To-End-Encryption
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="2px">
        <Tabs isManual variant="soft-rounded" colorScheme="yellow">
          <TabList mb="1em" >
            <Tab width="50%" > Login! </Tab>
            <Tab width="50%" > Sign Up </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>  <Login /> </TabPanel>
            <TabPanel> <SignupForm/>  </TabPanel>
          </TabPanels>
        </Tabs>        
      </Box>
    </Container>
  );
};

export default HomePage;
