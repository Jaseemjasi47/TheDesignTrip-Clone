import './App.css';
import CustomCursor from './Components/CustomCursor/CustomCursor';
import MatrixBackground from './Components/MatrixBackground/MatrixBackground';

function App() {
  return (
    <div className='body-container'>
      <MatrixBackground/>
      <CustomCursor/>
    </div>
  );
}

export default App;
