export function checkBtnVisibility(wrapper, btnRight, btnLeft) {
  if (wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth) {
    btnRight.style.visibility = "hidden";
  } else {
    btnRight.style.visibility = "visible";
  }

  if (wrapper.scrollLeft === 0) {
    btnLeft.style.visibility = "hidden";
  } else {
    btnLeft.style.visibility = "visible";
  }
}

export function scrollX(element, direction, speed, distance, step, btnRight, btnLeft) {
  /* Función para hacer scroll suave en el eje horizontal */
  let scrollAmount = 0;
  let slideTimer = setInterval(() => {
    if (direction === "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
      checkBtnVisibility(element, btnRight, btnLeft);
    }
  }, speed);
}
