// Copyright 2025 abdur
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
(function () {
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

  skip.addEventListener("click", finishIntro);

  // Lock scroll
  document.body.classList.add("is-lock");

  const total = prefersReduced
    ? 400
    : parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--duration"
        )
      ) || 2200;
  setTimeout(finishIntro, total);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !intro.hidden) {
      finishIntro();
    }
  });
})();
