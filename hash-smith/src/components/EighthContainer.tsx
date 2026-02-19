import Data from '../../miners.json';
import './containers.css';
import Miner from './Miner';

const EighthContainer = () => {
  return (
    <div className="big-container">
      <div className="big-first-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 8) return <Miner miner={miner} key={idx} />;
          })
          .slice(126, 135)}
      </div>
      <div className="big-second-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 8) return <Miner miner={miner} key={idx} />;
          })
          .slice(135, 144)}
      </div>
    </div>
  );
};

export default EighthContainer;
