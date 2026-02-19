/* eslint-disable @typescript-eslint/no-explicit-any */
import MinerModal from './MinerModal';
import '../../miners.json';

const Miner = (props: any) => {
  const { miner } = props;

  const statusMapper = (s: number | undefined) => {
    if (!s) {
      return 'black';
    } else if (s === 10) {
      return 'green';
    } else if (s === 20) {
      return 'yellow';
    } else if (s === 30) {
      return 'orange';
    } else if (s === 40) {
      return 'brown';
    } else if (s === 50) {
      return 'crimson';
    } else if (s === 60) {
      return 'red';
    }
  };

  return (
    <div className="miner" style={{ backgroundColor: statusMapper(miner.s) }}>
      <div className="modal-button">
        <MinerModal minerData={miner} />
      </div>
      {miner.port}
    </div>
  );
};

export default Miner;
