import Data from '../../miners.json';
import './containers.css';
import Miner from './Miner';

const SecondContainer = () => {
  return (
    <div className="small-container">
      <div className="small-first-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 2) return <Miner miner={miner} key={idx} />;
          })
          .slice(17, 22)}
      </div>
      <div className="small-second-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 2) return <Miner miner={miner} key={idx} />;
          })
          .slice(22, 31)}
      </div>
    </div>
  );
};

export default SecondContainer;
