import './App.css';
import FunFacts from './sections/fun-facts/FunFacts';
import StartScreen from './sections/start-screen/StartScreen';
import FiveBoroughs from './sections/five-boroughs/FiveBoroughs';
import Timeline from './sections/timeline/Timeline';
import PlacesToVisit from './sections/places-to-visit/PlacesToVisit';

import SectionTransition from './components/SectionTransition';

function App() {
  return (
    <div>
      <StartScreen />
      <SectionTransition />
      <Timeline />
      <SectionTransition />
      <PlacesToVisit />
      <SectionTransition />
      <FiveBoroughs />
      <SectionTransition />
      <FunFacts />
    </div>
  );
}

export default App;
