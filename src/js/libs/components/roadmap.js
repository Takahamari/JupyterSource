export function initRoadmap() {
  // define variables
  const items = document.querySelectorAll(".main-timeline li");
  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      items[i].style.transition = "0.5s";

      if (isElementInViewport(items[i])) {
        //items[i].classList.add("in-view");
        items[i].children[0].style.opacity = 1;
        items[i].children[0].style.transform = "scale(1)";
        items[i].style.opacity = 1;

      }else{
        items[i].children[0].style.opacity = 0;
        items[i].children[0].style.transform = "scale(1.2)";
        items[i].style.opacity = 0;
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
}
