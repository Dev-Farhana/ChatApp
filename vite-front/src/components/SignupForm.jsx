import React, { useState } from 'react'
import {FormControl,FormLabel, FormErrorMessage, Input ,InputGroup,InputRightElement} from "@chakra-ui/react";
import { VStack , Button } from "@chakra-ui/react";


function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pic, setPic] = useState("");
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);
    const postDetails = (pics) =>{ } ;
    const submitHandler = () => {};

  return (
    <VStack spacing={4} align="stretch">
        <FormControl id="name" isRequired>
          <FormLabel>Your Name</FormLabel>
          <Input
            type="text"
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormErrorMessage>Email is required.</FormErrorMessage>
        </FormControl>

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
            <FormErrorMessage>Email is required.</FormErrorMessage>
          </InputGroup>
        </FormControl>

        <FormControl id="pic">
          <FormLabel> Your Profile Picture </FormLabel>
          <Input
            type="file"
            accept="image/*"
            placeholder="Enter your Profile Picture"
            value={pic}
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </FormControl>

        <Button colorScheme="yellow" onClick={submitHandler}>
          Sign Up
        </Button>

    </VStack>
 
  );
}

export default SignupForm