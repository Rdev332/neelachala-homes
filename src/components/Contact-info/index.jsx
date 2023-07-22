import React from "react";

const ContactInfo = ({data}) => {
  const {office_address,phone_number_1,phone_number_2,info_email,bussiness_enquire_email} = data
  return (
    <div className="info pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="item">
              <span className="icon pe-7s-phone"></span>
              <div className="cont">
                <h6 className="playfont">Call Us</h6>
                <p>{phone_number_1}</p>
                <p>{phone_number_2}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="item">
              <span className="icon pe-7s-mail-open"></span>
              <div className="cont">
                <h6 className="playfont">Email Us</h6>
                <p>{info_email}</p>
                <p>{bussiness_enquire_email}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-map"></span>
              <div className="cont">
                <h6 className="playfont">Address</h6>
                <p>
                 {office_address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
