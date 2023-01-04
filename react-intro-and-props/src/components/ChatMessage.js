import "./ChatMessage.css";


const ChatMessage = ({ avatar, name, message, messageType }) => {
    if (messageType === "sent") {
        return <SentMessage message={message} />;
    } else {
        return <ReceivedMessage message={message} avatar={avatar} name={name} />;
    }
};


const SentMessage = ({ message }) => {
    return (
    <div className="chat-message-sent">
        <div className="container">
            <p className="sentBody">{message}</p>
        </div>
    </div>
    );
};

const ReceivedMessage = ({ avatar, name, message }) => {
    return (
        <div className="chat-message">
            <img src={avatar} className="images" />
        <div className="container">
            <p className="names">{name}</p>
            <p className="body">{message}</p>
        </div>
    </div>
    );
};

export default ChatMessage;