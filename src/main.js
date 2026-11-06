document.addEventListener("DOMContentLoaded",function(){
@include scripts/core/setup.js
@include scripts/core/helpers.js
@include scripts/core/split-text.js
@include scripts/core/ui.js
@include scripts/core/routing.js
@include pages/problem/scene-a-map.js
@include pages/problem/scene-b-barrier.js
@include pages/problem/scene-c-bridge.js
@include pages/problem/scene-e-road.js
@include pages/problem/scene-d-globe.js
@include pages/problem/problem.js
@include pages/how-it-works/how-it-works.js
@include scripts/shared/reveals.js
@include pages/home/home.js
/* ---- v3 additions ---- */
(function(){
@include pages/help/help.js
@include pages/become-a-donor/become-a-donor.js
})();
@include pages/problem/numbers.js
@include pages/partners/stack.js
@include pages/problem/numbers-hook.js
@include pages/partners/partners.js
@include scripts/shared/photos-and-progress.js
@include scripts/core/fit-screen.js
@include scripts/core/build-page.js
@include scripts/core/page-transition.js
@include scripts/core/boot.js
@include scripts/core/scroll-steps.js
@include scripts/shared/buttons.js
@include scripts/core/intro.js
@include scripts/core/background.js
});
