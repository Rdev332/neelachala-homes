import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace";

const LoadingScreen = () => {

  React.useEffect(() => {
    loadingPace()
  });

  return (
    <>
      <div className="showX">
        <div id="preloader">
          <div className="loading-text">Loading</div>
        </div>
      </div>
      <Script
        id="pace"
        strategy="beforeInteractive"
        src="/assets/js/pace.min.js"
      ></Script>
    </>
  );
};

export default LoadingScreen;
