
import { Box, Image } from '@chakra-ui/react';
import './App.css';
import WithSubnavigation from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Box style={{position:'relative'}} height={'100vh'}>
      <Box className='navbar' style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2 }}>
      <WithSubnavigation/>
      </Box>
      <Box className='vector' >
      <Image src="vector.png" />
       </Box>
       <Image  src="./foodplate.png" className='image' alt="Wall of Waffels"/>
       <Box className='box'  >
       <h1 className='h1'>Best Food Franchisee Business in India</h1>
       </Box>
      </Box>

     
    </div>
  );
}

export default App;
