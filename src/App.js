import './App.css';
import FunFacts from './sections/fun-facts/FunFacts';
import StartScreen from './sections/start-screen/StartScreen';
import FiveBoroughs from './sections/five-boroughs/FiveBoroughs';
import Timeline from './sections/timeline/Timeline';

function App() {
  return (
    <div>
      <StartScreen />
      <FunFacts />
      <FiveBoroughs />
      <Timeline />
    </div>
  );
}

export default App;
