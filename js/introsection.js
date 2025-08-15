(function () {
  const INTRO_KEY = "introShown_session";
  const intro = document.querySelector(".intro");
  const skip = document.getElementById("skipIntro");
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function finishIntro() {
    intro.classList.add("is-done");
    document.body.classList.remove("is-lock");
    intro.addEventListener("transitionend", () => {
      intro.hidden = true;
    });
  }

  skip.addEventListener("click", () => {
    sessionStorage.setItem(INTRO_KEY, "true");
    finishIntro();
  });

  if (sessionStorage.getItem(INTRO_KEY) === "true") {
    intro.hidden = true;
    document.body.classList.remove("is-lock");
    return;
  }

  document.body.classList.add("is-lock");
  const total = prefersReduced
    ? 400
    : parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--duration"
        )
      ) || 2200;
  setTimeout(() => {
    sessionStorage.setItem(INTRO_KEY, "true");
    finishIntro();
  }, total);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !intro.hidden) {
      sessionStorage.setItem(INTRO_KEY, "true");
      finishIntro();
    }
  });
})();
