import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { store } from './redux/store';


function App() {
  const theme = useSelector((store) => store.theme);
  return (
    <Box className="App" backgroundColor={theme=='dark'?"black":"white"}>
      <header className="App-header">
        <Todo />
      </header>
    </Box>
  );
}

export default App;
