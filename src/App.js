import './App.css';
import { ChatEngine } from 'react-chat-engine';

function App() {
  return (
    <div className="App">
      <ChatEngine 
      //props:
      height='100vh'
      projectID='d84a1bc3-b106-4f69-8318-8eba3622ece7'
      userName='Ursula'
      userSecret='password1234!'
      />
    </div>
  );
}

export default App;
