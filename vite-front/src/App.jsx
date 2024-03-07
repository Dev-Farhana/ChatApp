import "./App.css";
// import { Avatar, AvatarBadge } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react";
import {Routes , Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Chat from "./pages/ChatPage";

function App() {

  return (
    <div className="App">
    {/* <div>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
        />
      <Avatar>
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
    </div> */}

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chats" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
