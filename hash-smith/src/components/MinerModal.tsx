/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import '../../miners.json';

const MinerModal = (props: any) => {
  const { minerData } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalClick = () => {
    setModalVisible(true);
  };
  const handleCloseClick = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div onClick={handleModalClick} className="modal-open">
        &nbsp;
      </div>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>Pojašnjenje miner podataka:</h2>
            <p>
              <span>{minerData?.TH5s || 'N/A'}</span> - hashrate u zadnjih 5s
            </p>
            <p>
              <span>{minerData?.THAvg || 'N/A'}</span> - prosječan hashrate kroz
              zadnjih sat vremena
            </p>
            <p>
              <span>{minerData?.tB || 'N/A'}</span> - temperatura pločice minera
            </p>
            <p>
              <span>{minerData?.freq || 'N/A'}</span> - frekvencija
            </p>
            <p>
              <span>{minerData?.w || 'N/A'}</span> - trenutna snaga minera
            </p>
            <p>
              <span>{minerData.s}</span> -stanje minera (10 - OK, 20 - gubitak
              hashratea, 30 - upozorenje, 40 - manji problemi, 50 - veći
              problemi, 60 - stanje kritično)
            </p>
            <p>
              <span>{minerData.pdu}</span> - grupa
            </p>
            <p>
              <span>{minerData.port}</span> - redni broj unutar grupe
            </p>
            <button
              type="button"
              onClick={handleCloseClick}
              className="close-button"
            >
              Close &#10006;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MinerModal;
