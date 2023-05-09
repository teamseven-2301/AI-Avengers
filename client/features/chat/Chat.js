import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";

const Chat = () => {

  const location = useLocation()
  const { className, setting } =  location.state;

  console.log(location.state)


  const [input, setInput] = useState(""); //input html element
  const [messageHistory, setMessageHistory] = useState([]);
  const chatScrollEnd = useRef(null);

  // useEffect to run on page load
  useEffect(() => {
    console.log("setting state: " + setting)
    console.log("class state: " + className)
    const sendInitialScenario = async () => {
      const scenario =
        "Roleplay with me in persistent context where AI is a dungeon-master-type guide narrating a role-play game, I will input a prompt with my actions, and you will reply with the consequences of my actions in the game's universe. The game shall take place in a medieval fantasy setting but you are free to come up with the specific scenario. I am a knight. AI will construct the details of the gaming session to provide an immersive experience, and will now begin with only narration introducing player to the scenario.";

      setMessageHistory([{ role: "system", content: scenario }]); //first value in message history array
      const initialMessage = [{ role: "system", content: scenario }];
      // sending the initial scenario
      const response = await sendMessage(initialMessage);

      // updating message history with first response
      setMessageHistory((prevMessageHistory) => [
        ...prevMessageHistory,
        { role: "assistant", content: response },
      ]);
    };
    sendInitialScenario();
  }, []);

  // useEffect scrolls to bottom of chat window on messageHistory update
  useEffect(() => {
    chatScrollEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [messageHistory]);

  // fires everytime the submit button is clicked
  const handleSend = async () => {
    setMessageHistory((prevMessageHistory) => [
      ...prevMessageHistory,
      { role: "user", content: input },
    ]);

    const currentMessageHistory = [
      ...messageHistory,
      { role: "user", content: input },
    ];
    setInput(""); //clears input field

    // scrolls to end on new message from user
    chatScrollEnd.current.scrollIntoView({ behavior: "smooth" });

    // send message history to bot with user submission and update it with the bot's response
    const response = await sendMessage(currentMessageHistory);
    setMessageHistory((prevMessageHistory) => [
      ...prevMessageHistory,
      { role: "assistant", content: response },
    ]);
  };

  const sendMessage = async (arrayOfMessages) => {
    const response = await axios.post("/api/generate", { arrayOfMessages });
    return response.data;
  };

  return (
    <div id="chat-container">
      <div id="chat">
        <div id="filler-fix"></div>
        {messageHistory.map((message, index) => {
          if (index === 0 && message.role === "system") {
            return null;
          } else if (message.role === "assistant") {
            return (
              <div className="ai-messages" key={index}>
                <p>{message.content}</p>
              </div>
            );
          } else if (message.role === "user") {
            return (
              <div className="user-messages" key={index}>
                <p>
                  {"> "}
                  {message.content}
                </p>
              </div>
            );
          }
        })}
        <div ref={chatScrollEnd} id="chat-end"></div>
      </div>
      <div id="input-field">
        <input
          type="text"
          name="input"
          placeholder="What do you do?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          tabIndex={0}
        />
      </div>
    </div>
  );
};

export default Chat;
