import './App.css';
import FunFacts from './sections/fun-facts/FunFacts';
import StartScreen from './sections/start-screen/StartScreen';
import FiveBoroughs from './sections/five-boroughs/FiveBoroughs';
import Timeline from './sections/timeline/Timeline';
import PlacesToVisit from './sections/places-to-visit/PlacesToVisit';

function App() {
  return (
    <div>
      <StartScreen />
      <Timeline />
      <PlacesToVisit />
      <FiveBoroughs />
      <FunFacts />
    </div>
  );
}

export default App;
