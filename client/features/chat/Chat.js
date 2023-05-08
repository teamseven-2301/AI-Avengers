import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Chat = () => {
  const [input, setInput] = useState(""); //input html element
  const [messageHistory, setMessageHistory] = useState([]);

  // useEffect to run on page load
  useEffect(() => {
    const sendInitialScenario = async () => {
      const scenario =
        "Be my Dungeon Master in a Dungeons and Dragons game that's based on Conan the Barbarian. Assume the role of an expert on the works and literary style of Robert E. Howard. The adventure takes place in a port city on the Black coast. Give a narrative description of everything that follows, based on my actions, in the style of a Robert E. Howard novel, and without taking control of me or my character. Also provide suitable names for other characters and places. I arrive in the port city on the Black Coast. What is the city's name and what do I see as I arrive? Please keep your responses brief and to the point, using no more than 200 tokens";

      setMessageHistory([{ role: "system", content: scenario }]); //first value in message history array

      // sending the initial scenario
      const response = await sendMessage([
        { role: "system", content: scenario },
      ]);

      // updating message history with first response
      setMessageHistory((prevMessageHistory) => [
        ...prevMessageHistory,
        { role: "assistant", content: response },
      ]);
    };
    sendInitialScenario();
  }, []);

  // fires everytime the submit button is clicked
  const handleSend = async () => {
    setInput(""); //clears input field

    const inputValue = input.trim();
    if (inputValue) {
      setMessageHistory((prevMessageHistory) => [
        ...prevMessageHistory,
        { role: "user", content: inputValue },
      ]);

      // send message history to bot with user submission and update it with the bot's response
      const response = await sendMessage(messageHistory);
      setMessageHistory((prevMessageHistory) => [
        ...prevMessageHistory,
        { role: "assistant", content: response },
      ]);
    }
  };

  const sendMessage = async (arrayOfMessages) => {
    const response = await axios.post("/api/generate", { arrayOfMessages });
    return response.data;
  };

  return (
    <div>
      <main>
        <input
          type="text"
          name="input"
          placeholder="What do you do?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Submit</button>

        <div className="chat">
          {messageHistory.map((message, index) => {
            if (message.role === "user") {
              return (
                <div className="user-messages" key={index}>
                  <p>
                    {"> "}
                    {message.content}
                  </p>
                </div>
              );
            } else if (message.role === "assistant") {
              return (
                <div className="ai-messages" key={index}>
                  <p>{message.content}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </main>
    </div>
  );
};

export default Chat;
