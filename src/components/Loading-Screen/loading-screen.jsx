import React from "react";
import appData from "../../data/app.json";
import Script from "next/script";
import loadingPace from "../../common/loadingPace";
import { useRouter } from "next/router";

const LoadingScreen = () => {

  const [showLoading, setShowLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    let bodyEl = document.querySelector("body");
    if (showLoading) {
      loadingPace();
      if (bodyEl.classList.contains("hideX")) {
        bodyEl.classList.remove("hideX");
      }
    } else {
      bodyEl.classList.add("hideX");
    }
  });

  React.useEffect(() => {
    router.events.on("routeChangeStart", () => {
      console.log("routeChangeStart");
      setShowLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      console.log("routeChangeComplete");
      setShowLoading(false);
    });
    router.events.on("routeChangeError", () => {
      console.log("routeChangeError");
      setShowLoading(false);
    });

    return () => {
      router.events.off("routeChangeStart", () => {
        setShowLoading(true);
      });
      router.events.off("routeChangeComplete", () => {
        setShowLoading(false);
      });
      router.events.off("routeChangeError", () => {
        setShowLoading(false);
      });
    }
  }, [router.events]);



  return (
    <>
      <div className={`${appData.showLoading ? "showX" : "hideX"}`}>
        <div id="preloader">
          <div className="loading-text">Loading</div>
        </div>
      </div>
      {appData.showLoading ? (
        <Script
          id="pace"
          strategy="beforeInteractive"
          src="/assets/js/pace.min.js"
        ></Script>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingScreen;
