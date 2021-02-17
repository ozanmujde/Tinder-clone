import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";
const ChatScreen = () => {
    const [input, setInput] = useState();
    const [messages, setMessages] = useState([
        {
            name: "Bücür",
            image:
                "https://i.pinimg.com/originals/d2/f8/15/d2f815d3037dff1468846ed418b0a179.jpg",
            message: "sa bilader",
        },
        {
            name: "Bücür",
            image:
                "https://i.pinimg.com/originals/d2/f8/15/d2f815d3037dff1468846ed418b0a179.jpg",
            message: "borcu öde lan it",
        },
        { message: "yav kaçmıyozya bilader" },
    ]);
    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">
                YOU MATCHED WITH SASI ON 17/02/2021
            </p>
            {messages.map((message) =>
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">
                            {message.message}
                        </p>
                    </div>
                )
            )}

            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..."
                    type="text"
                />
                <button
                    onClick={handleSend}
                    className="chatScreen__inputButton"
                >
                    SEND
                </button>
            </form>
        </div>
    );
};

export default ChatScreen;
