import Data from '../../miners.json';
import './containers.css';
import Miner from './Miner';

const FifthContainer = () => {
  return (
    <div className="big-container">
      <div className="big-first-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 5) return <Miner miner={miner} key={idx} />;
          })
          .slice(72, 81)}
      </div>
      <div className="big-second-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 5) return <Miner miner={miner} key={idx} />;
          })
          .slice(81, 90)}
      </div>
    </div>
  );
};

export default FifthContainer;
