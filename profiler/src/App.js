import logo from './logo.svg';
import './App.css';
import Hobbies from './Components/Hobbies';
import Image from './Components/Image';
import data from './index';



function App() {
  return (
    <div class="display">
      <h1 class="name">{data.name}</h1>
      <Image />
      <Hobbies />  
    </div>

  );
}

export default App;
