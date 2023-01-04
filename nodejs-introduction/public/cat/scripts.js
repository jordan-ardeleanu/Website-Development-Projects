const messageInput = document.querySelector("#user-input");
const userInput = document.querySelector("#conversation-container")
const conversationElem = document.querySelector("#conversation-container");

const handleFocus = () => {
    messageInput.focus();
};

const sendMessage = (event) => {
  // prevent the default "page reload" from occurring.
event.preventDefault();

const message = { author: "user", text: messageInput.value };
fetch(`/cat-message/`)
    .then((res) => res.json())
    .then((data) => {
    
    updateConversation(data.message);
});
updateConversation(message);
};

const updateConversation = (message) => {
// deconstruct the message object
const { author, text } = message;
// create a <p> element
const messageElem = document.createElement("p");
messageElem.classList.add("message", author);
// add the text message to the element
messageElem.innerHTML = `<span>${text}</span>`;
conversationElem.scrollTop = conversationElem.scrollHeight;
// append the element to the conversation
conversationElem.appendChild(messageElem);
if (author === "user") {
    messageInput.value = "";
}
};


// const createMessage = document.createElement("p");
// createMessage.innerText = event;
// createMessage.className = "message";
// userInput.appendChild(createMessage);