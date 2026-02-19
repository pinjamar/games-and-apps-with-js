/* eslint-disable @typescript-eslint/no-explicit-any */
import Data from '../../miners.json';
import Miner from './Miner';
import './containers.css';

const FirstContainer = () => {
  return (
    <div className="small-container">
      <div className="small-first-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 1) return <Miner miner={miner} key={idx} />;
          })
          .slice(0, 4)}
      </div>
      <div className="small-second-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 1) return <Miner miner={miner} key={idx} />;
          })
          .slice(4, 13)}
      </div>
    </div>
  );
};

export default FirstContainer;
