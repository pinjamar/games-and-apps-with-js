import Data from '../../miners.json';
import './containers.css';
import Miner from './Miner';

const FourthContainer = () => {
  return (
    <div className="big-container">
      <div className="big-first-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 4) return <Miner miner={miner} key={idx} />;
          })
          .slice(53, 63)}
      </div>
      <div className="big-second-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 4) return <Miner miner={miner} key={idx} />;
          })
          .slice(63, 72)}
      </div>
    </div>
  );
};

export default FourthContainer;
