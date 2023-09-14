import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InfoPopup from "./gui/InfoPopUp";
import { updateMessageHistory } from "./ChatSlice";

const Chat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState(""); //input html element
  const [isLoading, setIsLoading] = useState(false);
  const chatScrollEnd = useRef(null);
  const messageHistory = useSelector((state) => state.messageHistory);
  const prompt = useSelector((state) => state.selectedRole.prompt);

  const quitButton = () => {
    navigate("/");
  };

  useEffect(() => {
    if (messageHistory.length === 0) {
      const sendInitialScenario = async () => {
        const scenario = prompt;

        dispatch(updateMessageHistory({ role: "system", content: scenario })); //first value in message history array
        const initialMessage = [{ role: "system", content: scenario }];
        const response = await sendMessage(initialMessage);

        // updating message history with first response
        dispatch(
          updateMessageHistory({ role: "assistant", content: response })
        );
      };
      sendInitialScenario();
    }
  }, []);

  // Scroll to bottom of chat window on messageHistory update
  useEffect(() => {
    chatScrollEnd.current.scrollIntoView({ behavior: "smooth" });
  });

  // User submitting a message
  const handleSend = async () => {
    const userMessage = { role: "user", content: input };
    dispatch(updateMessageHistory(userMessage));
    setInput("");

    chatScrollEnd.current.scrollIntoView({ behavior: "smooth" });

    // send message history to bot with user submission and update it with the bot's response
    const response = await sendMessage([...messageHistory, userMessage]);
    dispatch(updateMessageHistory({ role: "assistant", content: response }));
  };

  // Request to backend
  const sendMessage = async (arrayOfMessages) => {
    setIsLoading(true);
    const response = await axios.post("/api/generate", { arrayOfMessages });
    setIsLoading(false);
    return response.data;
  };

  return (
    <div id="chat-container">
      <div id="chat">
        <div id="filler-fix"></div>
        <ChatHistory messageHistory={messageHistory} />
        {isLoading && <p>Loading...</p>}
        <div ref={chatScrollEnd} id="chat-end"></div>
      </div>
      <div id="input-container">
        <div id="input-field">
          <input
            type="text"
            name="input"
            placeholder="What do you do?"
            autoComplete="off"
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

        <InfoPopup />
        <button id="quit-btn" onClick={quitButton}>
          QUIT
        </button>
      </div>
    </div>
  );
};

export default Chat;

const Message = ({ message }) => {
  if (message.role === "assistant") {
    return (
      <div className="ai-messages">
        <p>{message.content}</p>
      </div>
    );
  } else if (message.role === "user") {
    return (
      <div className="user-messages">
        <p>
          {"> "}
          {message.content}
        </p>
      </div>
    );
  }
};

const ChatHistory = ({ messageHistory }) => {
  return (
    <>
      {messageHistory &&
        messageHistory.map((message, index) => (
          <Message key={index} message={message} />
        ))}
    </>
  );
};
