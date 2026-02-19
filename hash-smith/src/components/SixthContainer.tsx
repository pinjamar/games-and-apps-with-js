import Data from '../../miners.json';
import './containers.css';
import Miner from './Miner';

const SixthContainer = () => {
  return (
    <div className="big-container">
      <div className="big-first-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 6) return <Miner miner={miner} key={idx} />;
          })
          .slice(90, 99)}
      </div>
      <div className="big-second-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 6) return <Miner miner={miner} key={idx} />;
          })
          .slice(99, 108)}
      </div>
    </div>
  );
};

export default SixthContainer;
