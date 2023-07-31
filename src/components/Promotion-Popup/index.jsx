import React from 'react';
import Popup from 'reactjs-popup';
import * as pixel from '../../common/fpixel'

const PromotionPopup = ({ data }) => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleRedirect = () => {
        pixel.event('PromotionPopup', {
            title: data?.title,
            content: data?.content,
            redirectUrl: data?.redirectUrl
        })
        if (!data?.redirectUrl) return;
        if (data?.redirectUrl.startsWith('http')) {
            window.open(data?.redirectUrl, '_blank');
        } else {
            const hostname = window.location.hostname;
            window.open(`https://${hostname}${data?.redirectUrl}`, '_blank');
        }
    }

    React.useEffect(() => {
        if (!data?.enabled || sessionStorage.getItem('promotionPopup')) return;
        setTimeout(() => {
            setShow(true);
            // set in session storage
            sessionStorage.setItem('promotionPopup', true);
        }, 5000);
    }, []);

    return (
        <Popup open={show} onClose={handleClose} modal
            className='popup-content'
            overlayStyle={{
                background: 'rgba(0, 0, 0, 0.6)'
            }}
        >
            <div className="modal-content">
                <div className="modal-body">
                    <img src={data?.image?.data.attributes.url} alt="popup" />
                </div>
                <div className="row align-items-center">
                    <div className="modal-header">
                        <h5>{data?.title}</h5>
                    </div>
                </div>
                <div className="modal-body">
                    <p>{data?.content}</p>
                </div>
                <div className="modal-action mt-20">
                    <a
                        onClick={handleClose}
                        className="btn-curve btn-bord btn-lit">
                        <span
                            style={{
                                color: '#b93f3f',
                            }}
                        >close</span>
                    </a>
                    <button className="btn-curve btn-color"
                        onClick={handleRedirect}
                    >
                        <span>visit</span>
                    </button>
                </div>
            </div>
        </Popup>
    );
}

export default PromotionPopup;