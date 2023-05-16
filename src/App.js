import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine 
      //props:
      height='100vh'
      projectID='d84a1bc3-b106-4f69-8318-8eba3622ece7'
      userName='Ursula'
      userSecret='password1234!'
      renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage = {() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
