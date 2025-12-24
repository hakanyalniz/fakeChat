import "./ChatWindow.css";

function ChatWindow() {
  return (
    <div className="chat-window">
      <div className="chat-header">Chat</div>
      <div className="chat-body">Messages go here</div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message" />
      </div>
    </div>
  );
}

export default ChatWindow;
