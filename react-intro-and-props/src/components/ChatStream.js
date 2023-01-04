import React from "react";
import ChatMessage from "./ChatMessage";

import './ChatStream.css';

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

const ChatStream = (props) => {
  return (
    <section className="chat-stream">
      {props.messages.map((message) => {
        // console.log(message);
        let messageType;
        if (message.user === props.currentUser) {
          messageType = "sent";
        } else {
          messageType = "received";
        }
        return (
          <ChatMessage
            key={message.id}
            name={message.user.username}
            avatar={message.user.avatar}
            message={message.body}
            messageType={messageType}
          />
        );
      })}
    </section>
  );
};
export default ChatStream;