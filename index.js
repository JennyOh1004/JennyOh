// mouse cursor effect

let circle = document.getElementById("circle");

window.onmousemove = function (e) {
  let x = e.clientX;
  let y = e.clientY;
  let newx = x - 60;
  let newy = y - 60;
  circle.style.top = newy + "px";
  circle.style.left = newx + "px";
};

//nav scroll effect

let header = document.getElementById("nav");

window.addEventListener("scroll", (e) => {
  // console.log("scroll");
  let scroll = window.pageYOffset;
  if (scroll >= 60) {
    // console.log("scrolled");
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// function isElementInViewport(el) {
//   var rect = el.getBoundingClientRect();

//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight ||
//         document.documentElement.clientHeight) /* or $(window).height() */ &&
//     rect.right <=
//       (window.innerWidth ||
//         document.documentElement.clientWidth) /* or $(window).width() */
//   );
// }

// const aboutEl = document.getElementById("about__title");
// window.addEventListener("scroll", (e) => {
//   // console.log(window.scrollY);
//   const isAboutElInView = isElementInViewport(aboutEl);

//   if (isAboutElInView) {
//     console.log("in view");
//     if (!aboutEl.classList.contains("slide-up")) {
//       aboutEl.classList.add("slide-up");
//     }
//   } else {
//     aboutEl.classList.remove("slide-up");
//   }
// });

//fade in text effect

// function isElementInViewport(el) {
//   if (typeof jQuery === "function" && el instanceof jQuery) {
//     el = el[0];
//   }
//   let rect = el.getBoundingClientRect();
//   return (
//     (rect.top <= 0 && rect.bottom >= 0) ||
//     (rect.bottom >=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.top <=
//         (window.innerHeight || document.documentElement.clientHeight)) ||
//     (rect.top >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight))
//   );
// }

// window.addEventListener("scroll", (e) => {
//   console.log("scrollIn");
// });

// let scroll =
//   window.requestAnimationFrame ||
//   function (callback) {
//     window.setTimeout(callback, 1000 / 60);
//   };
// let elementsToShow = document.querySelectorAll(".about");

// function loop() {
//   elementsToShow.forEach(function (el) {
//     if (isElementInViewport(el)) {
//       element.classList.add("is-visible");
//     } else {
//       element.classList.remove("is-visible");
//     }
//   });
//   scroll(loop);
// }
// loop();
