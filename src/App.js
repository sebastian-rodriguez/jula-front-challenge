import './App.css';
import Navigator from './Navigator';
import AppProvider from './contexts/AppContext';

function App() {
  
  return (
    <AppProvider>
      <Navigator />
    </AppProvider>
  );
}

export default App;
