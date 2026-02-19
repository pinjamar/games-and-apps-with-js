import './App.css';
import FirstContainer from './components/FirstContainer';
import SecondContainer from './components/SecondContainer';
import ThirdContainer from './components/ThirdContainer';
import FourthContainer from './components/FourthContainer';
import FifthContainer from './components/FifthContainer';
import SixthContainer from './components/SixthContainer';
import SeventhContainer from './components/SeventhContainer';
import EighthContainer from './components/EighthContainer';
import NinthContainer from './components/NinthContainer';

function App() {
  return (
    <>
      <div className="small-containers-group">
        <FirstContainer />
        <SecondContainer />
        <ThirdContainer />
      </div>
      <div className="big-containers-group-one">
        <FourthContainer />
        <FifthContainer />
        <SixthContainer />
      </div>
      <div className="big-containers-group-two">
        <SeventhContainer />
        <EighthContainer />
        <NinthContainer />
      </div>
    </>
  );
}

export default App;
