import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PromotionPopup = ({ data }) => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => {
        setShow(false);
    };

    React.useEffect(() => {
        if (!data?.enabled) return;
        setTimeout(() => {
            setShow(true);
        }, 5000);
    }, []);

    return (
        <Popup open={show} onClose={handleClose} modal
            className='popup-content'
        >
            <div className="modal-content">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="modal-header">
                            <h5>{data?.title}</h5>
                        </div>
                        <button type="button" className="btn-close" onClick={handleClose}>
                            <span className="icon icon-simple-remove"></span>
                        </button>
                    </div>
                </div>
                <div className="modal-body">
                    <img src={data?.image?.url} alt="popup" />
                    <p>{data?.description}</p>
                    <button className="btn btn-primary" onClick={handleClose}>Close</button>
                </div>
            </div>
        </Popup>
    );
}

export default PromotionPopup;