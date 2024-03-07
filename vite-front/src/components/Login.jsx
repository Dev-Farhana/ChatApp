import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { VStack, Button } from "@chakra-ui/react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const submitHandler = () => {};

  return (
    <VStack spacing={4} align="stretch">

      <FormControl id="email" isRequired>
        <FormLabel>Your Email </FormLabel>
        <Input
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormErrorMessage>Email is required.</FormErrorMessage>
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel> Password </FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement>
            <Button onClick={handleClick}>{show ? "Hide" : "Show"}</Button>
          </InputRightElement>
          <FormErrorMessage> Password is required.</FormErrorMessage>
        </InputGroup>
      </FormControl>

      <Button colorScheme="teal" onClick={submitHandler}>
        Log In
      </Button>
      
      <Button colorScheme="cyan" onClick={() =>{
        setEmail("guest@mail.com");
        setPassword("12345")
      }}>
       Get Guest User Credentials
      </Button>

    </VStack>
  );
}

export default Login