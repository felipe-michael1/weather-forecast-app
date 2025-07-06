import './App.css';

import Weather from './services/getApi';
import FormWeather from './services/postApi';

function App() {
  return (
    <div className="App">
          <Weather />
    </div>
  );
}

export default App;
