let circle = document.getElementById("circle");

window.onmousemove = function (e) {
  let x = e.clientX;
  let y = e.clientY;
  let newx = x - 60;
  let newy = y - 60;
  circle.style.top = newy + 'px';
  circle.style.left = newx + 'px';
};


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  );
}
const aboutEl = document.getElementById('about__title');
window.addEventListener("scroll", (e) => {
  // console.log(window.scrollY);
  const isAboutElInView = isElementInViewport(aboutEl);

  if (isAboutElInView) {
    console.log('in view');
    if (!aboutEl.classList.contains('slide-up')) {
      aboutEl.classList.add("slide-up");
    }
  } else {
    aboutEl.classList.remove("slide-up");
  }
});
