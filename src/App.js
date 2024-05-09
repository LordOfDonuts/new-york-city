import './App.css';
import FunFacts from './sections/fun-facts/FunFacts';
import StartScreen from './sections/start-screen/StartScreen';
import FiveBoroughs from './sections/five-boroughs/FiveBoroughs';
import Timeline from './sections/timeline/Timeline';
import PlacesToVisit from './sections/places-to-visit/PlacesToVisit';

import SectionTransition from './components/SectionTransition';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar />
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
