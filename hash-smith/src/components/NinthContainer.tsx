import Data from '../../miners.json';
import './containers.css';
import Miner from './Miner';

const NinthContainer = () => {
  return (
    <div className="big-container">
      <div className="big-first-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 9) return <Miner miner={miner} key={idx} />;
          })
          .slice(144, 153)}
      </div>
      <div className="big-second-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 9) return <Miner miner={miner} key={idx} />;
          })
          .slice(153, 162)}
      </div>
    </div>
  );
};

export default NinthContainer;
