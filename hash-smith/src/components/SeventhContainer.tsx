import Data from '../../miners.json';
import './containers.css';
import Miner from './Miner';

const SeventhContainer = () => {
  return (
    <div className="big-container">
      <div className="big-first-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 7) return <Miner miner={miner} key={idx} />;
          })
          .slice(108, 117)}
      </div>
      <div className="big-second-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 7) return <Miner miner={miner} key={idx} />;
          })
          .slice(117, 126)}
      </div>
    </div>
  );
};

export default SeventhContainer;
