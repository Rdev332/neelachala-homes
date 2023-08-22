const loadingPace = () => {
  let preloader = document.querySelector("#preloader"),
    loadingText = document.querySelector(".loading-text"),
    paceActive = document.querySelector(".pace-active");
  const addDoneClass = () => {
    preloader.classList.add("isdone");
    loadingText.classList.add("isdone");
    // opacity: 0;
    paceActive.style.opacity = 0;
  };
  Pace.on("start", function () {
    preloader.classList.remove("isdone");
    loadingText.classList.remove("isdone");
  });
  Pace.on("done", function () {
    addDoneClass();
  });

  // check safari mac
  if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Mac") != -1) {
    addDoneClass();
  }
  if (document.querySelector("body").classList.contains("pace-done")) {
    addDoneClass();
  }
  document.addEventListener("load", () => {
    addDoneClass();
  });

  return Pace.bar.progress;
}

export default loadingPace