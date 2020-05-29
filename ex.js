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

//scroll effect

// let s = document.getElementById("home__h2");

// window.addEventListener("scroll", (e) => {
//   let top = window.pageYOffset;
//   console.log(top);
//   if (top >= 60) {
//     console.log("opacity!!");
//     s.style.opacity = "1";
//   } else {
//     s.style.opacity = "0";
//   }
// });

//smooth effect

// function smoothScroll(target, duration) {
//   var target = document.querySelector(target);
//   var targetPosition = target.getBoundingClientRect().top; //top 만 필요
//   var startPosition = window.pageYOffset;
//   var distance = targetPosition - startPosition;
//   var startTime = null;
//   console.log(startPosition);

//   function animation(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     var timeElapsed = currentTime - startTime;
//     var run = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) requestAnimationFrame(animation);
//   }

//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t * +b;
//     t--;
//     return (-b / 2) * (t * (t - 2) - 1) + b;
//   }
//   requestAnimationFrame(animation);
// }

// var section1 = document.querySelector("#home__h2");

// section1.addEventListener("scroll", (e) => {
//   smoothScroll("#home__h2", 2000);
// });

//-------------------------->

// function scrollAppear() {
//   var introText = document.querySelector(".intro_text");
//   var introPosition = introText.getBoundingClientRect().top;
//   var screenPosition = window.innerHeight / 1.3;
//   // console.log(screenPosition);

//   if (introPosition < screenPosition) {
//     // console.log(introPosition, screenPosition);
//     introText.classList.add("intro_appear");
//   }
// }

// window.addEventListener("scroll", scrollAppear);

function animateOnScroll(target, triggerPosition, reversible = false) {
  let targetEl = document.querySelectorAll(target);
  targetEl.forEach((el) => {
    let targetElTop = el.getBoundingClientRect().top;
    let windowHeight = window.innerHeight / 1.5;
    if (targetElTop <= windowHeight * triggerPosition) {
      el.classList.add("intro_appear");
    } else if (targetElTop >= windowHeight && reversible) {
      el.classList.remove("intro_appear");
    }
  });
}
window.addEventListener("scroll", () => {
  animateOnScroll(".intro_text", 0.8, true);
});
