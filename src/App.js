
import { Box } from '@chakra-ui/react';
import './App.css';
import WithSubnavigation from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Box className='navbar'>
      <WithSubnavigation/>
      </Box>
     
    </div>
  );
}

export default App;
